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

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    """
    Handles incoming chat messages and generates a response based on keywords or Langchain.
    """
    user_message = request.message.strip().lower()

    if user_message == "info":
        info_response = (
            "Here's some information categories:\n\n"
            "Home\n"
            "Contact\n"
            "All courses\n"
            "Services\n"
            "About"
        )
        return {"response": info_response}
    elif user_message == "menu":
        menu_response = (
            "How can I help you further?\n\n"
            "1. Info\n"
            "2. Enquiry\n"
            "3. Contact by WhatsApp"
        )
        return {"response": menu_response}
    else:
        try:
            response = chain.invoke({"question": request.message})
            return {"response": response}
        except Exception as e:
            print(f"Error in /chat endpoint with Langchain: {e}") # Print error for debugging
            return {"error": str(e)}, 500

@app.get("/initial_message")
async def get_initial_message():
    """
    Returns the initial welcome message and options for the chatbot when it starts.
    """
    # Updated welcome message with more welcoming words
    welcome_message = (
        "Welcome to Seven Eleven Academy! We're thrilled to have you here. "
        "How can I assist you today? Feel free to ask about our programs, "
        "services, or anything else about the academy."
    )
    options = [
        "1. Info",
        "2. Menu",
    ]
    # Combine message and options into a single string for display
    full_message = f"{welcome_message}\n\nHere are some quick links:\n" + "\n".join(options)
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

