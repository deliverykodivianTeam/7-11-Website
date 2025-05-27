from fastapi import FastAPI
from pydantic import BaseModel
from langchain_openai import ChatOpenAI # Or any other LLM you are using
from langchain.prompts import ChatPromptTemplate
from langchain.schema.runnable import RunnablePassthrough, RunnableLambda
from langchain.schema import StrOutputParser
from dotenv import load_dotenv
import os

load_dotenv() # Load environment variables from .env file

app = FastAPI()

# Initialize your Langchain components
# Ensure you have OPENAI_API_KEY set in your .env file or environment variables
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Define your prompt (this is a very basic example)
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant for Seven Eleven Training Academy. Answer questions about the academy, its courses, and services."),
    ("human", "{question}"),
])

# Create a simple chain
chain = (
    {"question": RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)

class ChatRequest(BaseModel):
    message: str

# Define your specific Q&A pairs, accessible by number
specific_qa_numbered = {
    "1": {
        "question": "What courses or programs do you offer?",
        "answer": "We offer a range of programs including Artificial Intelligence, Data Science, networking, cyber security, cloud computing, software development, soft skills and language trainings etc. Each program is designed to meet industry standards and prepare students for relevant job roles or further education."
    },
    "2": {
        "question": "What are the eligibility requirements for the courses?",
        "answer": "Eligibility varies by program. For most entry-level courses, a high school diploma or equivalent is sufficient. Some advanced programs may require prior knowledge or experience. We can guide you based on your background."
    },
    "3": {
        "question": "What is the duration of the course?",
        "answer": "The duration depends on the course. For example, our Cyber Security Course is a 3.5 month program, with 70 hours of instruction per week."
    },
    "4": {
        "question": "What is the fee structure? Are there any additional costs?",
        "answer": "The tuition fee for this course is Rs.37, 500. Additional costs may include books, certification exams, or software tools, which will be detailed during enrollment."
    },
    "5": {
        "question": "Is there any financial aid, installment option, or scholarship available?",
        "answer": "Yes, we offer installment payment plans and occasional merit-based or need-based scholarships. Please speak with the Centre In-charge for details."
    },
    "6": {
        "question": "What is the mode of instruction—online, offline, or hybrid?",
        "answer": "We offer flexible options including in-person classes, fully online, and hybrid modes to accommodate various learning needs and schedules."
    },
    "7": {
        "question": "Who are the instructors? What are their qualifications?",
        "answer": "Our instructors are certified professionals with extensive industry experience and teaching credentials. You’ll be learning from experts actively working in their respective fields."
    },
    "8": {
        "question": "Will I receive a certificate after completion? Is it recognized?",
        "answer": "Seven Eleven Academy offers certificates upon completion of its IT training courses. These certificates serve as a credential of completion and can be used to demonstrate skills and knowledge to potential employers. BITA also prepares students for third-party certifications like Google and Oracle, helping them to obtain industry-recognized qualifications."
    },
    "9": {
        "question": "Do you provide job placement or internship support?",
        "answer": "Yes, Seven Eleven Academy offers job placement support and internship opportunities. We aim to assist students in securing jobs within 60 days of course completion. Our focus is on industry-aligned curriculum, practical training, and dedicated placement support ensures that students are job-ready. We also provide advice for those transitioning from non-IT backgrounds to IT, and offer support with mock interviews and resume building."
    },
    "10": {
        "question": "Can I visit the campus or attend a demo class?",
        "answer": "Absolutely! We encourage prospective students to visit our campus and attend a free demo session to experience our teaching style and environment firsthand."
    },
    "11": {
        "question": "What is the class size or student-to-instructor ratio?",
        "answer": "We maintain small class sizes, typically 15–20 students per instructor, to ensure personalized attention and effective learning."
    },
    "12": {
        "question": "Are there opportunities for hands-on learning or projects?",
        "answer": "Yes, our programs include practical sessions, real-world projects, and assessments to help you apply what you learn in a practical setting."
    },
    "enquiry": {
        "question": "Enquiry",
        "answer": "Please provide more details about your enquiry, and we'll do our best to assist you."
    },
    "contact by whatsapp": {
        "question": "Contact by WhatsApp",
        "answer": "You can contact us via WhatsApp at +91 9150 574201" # Added a placeholder number
    }
}


@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    """
    Handles incoming chat messages and generates a response based on numbered questions or Langchain.
    """
    user_message = request.message.strip().lower()

    # Check if the user input is a number corresponding to a specific question
    if user_message in specific_qa_numbered:
        return {"response": specific_qa_numbered[user_message]["answer"]}
    
    # You can keep other keyword checks here if you need them, e.g., for "enquiry" or "contact by whatsapp"
    elif user_message == "enquiry":
        return {"response": specific_qa_numbered["enquiry"]["answer"]}
    elif user_message == "contact by whatsapp":
        return {"response": specific_qa_numbered["contact by whatsapp"]["answer"]}

    else:
        # Fallback to Langchain if no specific number or keyword match
        try:
            response = chain.invoke({"question": request.message})
            # If Langchain provides a valid response, return it
            return {"response": response}
        except Exception as e:
            print(f"Error in /chat endpoint with Langchain: {e}") # Print error for debugging
            # Return a user-friendly error message instead of letting it fail
            return {"response": "Sorry, I don't have further details for queries apart from the listed questions. Please contact us directly at +91 9150 574201 for more assistance."}


@app.get("/initial_message")
async def get_initial_message():
    """
    Returns the initial welcome message and options for the chatbot when it starts.
    """
    welcome_message = (
        "Welcome to Seven Eleven Academy! We're thrilled to have you here. "
        "How can I assist you today? You can type the number corresponding to your question "
        "or ask anything else about the academy."
    )
    
    # Dynamically generate the list of numbered questions
    question_options = []
    for num_str, qa_pair in specific_qa_numbered.items():
        if num_str.isdigit(): # Only include numbered questions in this list
            question_options.append(f"{num_str}. {qa_pair['question']}")
    
    # Add other general options if desired
    other_options = [
        "You can also type 'enquiry' for general inquiries or 'contact by whatsapp' to reach us."
    ]

    full_message = f"{welcome_message}\n\nHere are some common questions:\n" + "\n".join(question_options) + "\n\n" + "\n".join(other_options)
    return {"message": full_message}

# Optional: Add CORS middleware if your React app is on a different domain/port
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:3000",  # Your React app's development server
    "http://localhost:5173",  # If you're using Vite's default port
    # Add your production domain here when you deploy
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)