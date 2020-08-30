**Setup**

1) create and activate virtual environment
`virtualenv .env && source .env/bin/activate`

2) install pip packages
`pip install -r requirements.txt`

3) create .env file in /django_react following .env.example


**Misc**

When new pip package is installed locally, make sure to update requirements.txt
`pip freeze > requirements.txt`
