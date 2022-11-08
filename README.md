# Fetch Frontend Assessment
Website: https://jbroxton-fetch-assessment.netlify.app/

## Project Description
This is my attempt at the frontend assessment for Fetch Reward's Apprenticeship. The excersie wanted me to create a user login form that took in five inputs. These inputs include : Full name, Email, Password, Occupation, and State. The excerise required me to make an api call to obtain a list of occupations and states the user 
could choose between for the corresponding fields. After the user successfully completely the field I was required to make another api call with an object with all the 
user data.


### Technologies Used

For this excerise I choose to use the React Framework. I also used basic CSS to style the form. I used Jest and the react-testing-library for some automated testing.
I deployed my site with netlify.

### User Experience

 - User is Greeted with a one page website with si mple form that has 6 input fields and a submit button. Those fields include Full Name, Email, Password, Confirm Password, Occupation, and State. 
 - The occupation and state fields are drop down menus that have the list of choices that I imported from the api.
 - If any field is left blank when the button is clicked the site with display an error message.
 - If the email is not valid an error message will be displayed.
 - If the password and confirm password fields do not match the user will be displayed an error message. 
 - If the password is not between 8-15 characters the user will recieve an error message.
 - If the form is filled out correctly the user will recieve an success message and their user data will be sent to the api.
 - Website is also responsive so no matter what device the user is on they will be able to fill out the form.
 

