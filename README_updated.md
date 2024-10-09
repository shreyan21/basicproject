
# Django CRUD Web Application

This project is a simple Django-based web application that demonstrates basic CRUD (Create, Read, Update, Delete) operations. The app uses SQLite as the database and includes a basic HTML/CSS interface with API requests sent from `index.html` and `index.js`.

## Features

- **Create**: Add a new item with a name and description.
- **Read**: Retrieve and display all items.
- **Update**: Update the details of an existing item based on its ID.
- **Delete**: Delete an item based on its ID.

## Requirements

- Python 3.x
- Django
- SQLite (default database for Django)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   

2. Install the required dependencies directly in your environment (since virtual environment is not used):
   ```bash
   pip install -r requirements.txt
   ```

3. Set up the database:
   ```bash
   python manage.py migrate
   ```

4. Run the development server:
   ```bash
   python manage.py runserver
   ```

5. Open the application in your browser:
   ```
   http://127.0.0.1:8000/
   ```

6. Frontend files (`index.html` and `index.js`) should be in your project directory. These files will send API requests to interact with the Django backend.

## Usage

- Open `index.html` in your browser to interact with the API.
- The `index.js` file handles sending API requests (GET, POST, PUT, DELETE) to the Django backend.
- Use forms in `index.html` to add and delete items.

## Project Structure

```
/myproject
│
├── basicapp/                # Django app folder
│   ├── migrations/            # Database migration files
│   ├── serializer.py/                # Static files (CSS, images, etc.)
│   ├── tests.py/             # HTML templates
│   ├── admin.py               # Django admin configurations
│   ├── apps.py                # App configuration
│   ├── models.py              # Database models
│   ├── views.py               # Views for handling requests
│   └── urls.py                # URL routing for the app
│   
├── myproject/         # Main project folder
│   ├── settings.py            # Project settings
│   ├── urls.py                # Project-level URL routing
│   ├── wsgi.py                # WSGI configuration
│   ├── index.html             # Frontend HTML file
│   ├── index.js               # Frontend JavaScript file for API requests
│
├── manage.py                  # Django management script
├── db.sqlite3                 # SQLite database
├── requirements.txt           # List of dependencies
└── README.md                  # Project documentation
```

## API Endpoints

- **Create**: `POST /addnote/` - Add a new item.
- **Read**: `GET /` - Retrieve a list of all items.
- **Update**: `POST /updatenote<int:id>/` - Update an existing item.
- **Delete**: `POST /deletenote/<int:id>/` - Delete an item by ID.

## Dependencies

You can find all the necessary dependencies in the `requirements.txt` file. To install them, run:
```bash
pip install -r requirements.txt
```

## Running Tests (Optional)

If you have set up tests, run them with:
```bash
python manage.py test
```
