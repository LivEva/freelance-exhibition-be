### Welcome to the Backend for the Virtual Exhibition Project

### Installation:

1. Clone the repository in your terminal:

```
 git clone https://github.com/yourusername/project-name.git
 ```

2. Navigate to your project:

```
cd project-name
```

and open in code editor.

3. To install local dependencies run the following in your terminal:

```
npm install
```

## Create an env file

In this project we are using two different API's to gather museum information. Harvard and Victoria and Albert Museum.

However, for Harvard we need a unique key to use this api, to achieve this do the following...

1. Visit this link and fill the request form for your unique key

https://docs.google.com/forms/d/e/1FAIpQLSfkmEBqH76HLMMiCC-GPPnhcvHC9aJS86E32dOd0Z8MpY2rvQ/viewform

You should then recieve an email containing this key.

2. Now in your repo create a file called .env and inside the file add the line:

```sh
HARVARD_API_KEY='your_api_key_here';
```

and replace 'your_api_key_here' with the api key you have been sent. (make sure it is wrapped in quotation marks like above.)

This securely stores the key. 



