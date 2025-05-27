# Use a stable Python image
FROM python:3.10-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpoppler-cpp-dev \
    tesseract-ocr \
    ghostscript \
    libxml2-dev \
    libxslt1-dev \
    libz-dev \
    poppler-utils \
    curl \
    && apt-get clean

# Set working directory
WORKDIR /app

# Copy requirement files
COPY requirements.txt .

# Install Python packages
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app
COPY . .

# Expose the port Flask will run on
EXPOSE 5000

# Run the Flask app
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
