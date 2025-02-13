# Emotion Recognition- Machine Learning 

![logo](static/img/emotion_peeps.jpg)

[Emotions Predictor ](https://voice-emotion.herokuapp.com)

## Table of contents
* [Emotion Predictor](#emotion-predictor)
* [Technologies](#technologies)
* [ETL](#extract-transform-load)
* [Test & Train](#test-train)
* [Visualization](#visualization)
* [Learnings](#learnings)
* [Run Flask App](#run-flask-app)
* [Heroku](#heroku)
* [Resources](#resources)
* [Contact](#contact)


## Emotion Predictor 

![logo](static/img/emotion_predictor_logo.png)

What is the Emotions Predictor?

Emotions Predictor is an application that allows users to record, and playback short audio file and its built-in super cool Machine Learning model will predict the range of emotions and the gender of the audio clip.
There are options to compare the frequencies and other attributes for various emotions to see how they show up on a scale.
Why Emotions Predictor? 
Empathy is important because it helps us understand how others are feeling so we can respond appropriately to the situation. Not all of us are born as manipulators, fortune-tellers or psychics with excellent empathetic skills. Also there are people who have certain disabilities understanding emotions or having below conditions like:
* A person who has difficulty identifying and expressing emotions
* People having trouble identifying social cues
* People who are hard of hearing

Emotions predictor, can come in handy for Interpreting the emotions in the voicemails, FBI recordings, law disputes, alien interactions, etc.

Emotions include: 

* 02 = calm
* 03 = happy
* 04 = sad
* 05 = angry
* 06 = fearful
* 07 = disgust
* 08 = surprised


## Technologies

* Machine Learning
* Jupyter Notebook / Pandas 
* Javascript 
* Flask App
* D3
* HTML / CSS 
* Tableau 

## Extract Transform Load
*	Data from CSV files of audio voices. 
*	Used `librosa` package to convert audio files into 128 Features including low-level feature extraction, such as chromograms, Mel spectrogram, MFCC, and various other spectral and rhythmic features
*	Used Pandas to provide the feature data for emotions and gender as input to the models
*	Tested `RandomForestClassifier`, `KNeighborsClassifier` , `Keras Deep Learning`, and `Linear Regression` to find the most accurate model.  
*	Developed a record and playback functionality - the output of which could be read a model for predicting the emotions and the gender of the recorded audio
*	Sample pre-recorded test clips were given as input to the models and emotions were predicted successfully.

![wave gif](static/img/200_d.gif)

## Test Train

Using the Labrosa library we inputted the wave. Files thru Labrosa to parse the file into 128 Mel-frequency cepstral coefficients (MFCCs) features. MFCCs represent the audio clip as a nonlinear "spectrum-of-a-spectrum". In an MFC, the frequency bands are equally spaced on the scale, which approximates the human auditory system.

This process allowed the audio file to be represented by data that was then able to be fed into various machine learning models for testing and training. We then used the same parsing method to take a user’s inputted file and break it down into MFCC data to be used for the model to predict the makeup of emotions in the person’s voice.

Through the models it was determined that for our purpose Random Forrest Classifier produced the most accurate prediction and was the model that was not overtrained

![model](static/img/model.JPG)

Emotion Random Forest

![emotion RF](static/img/model_reports/1emotion_rf.png)

Gender Random Forest

![gender RF](static/img/model_reports/gender_rf.png)

Emotion Deep Learning

![emotion deep learning](static/img/model_reports/emo_deep_learninng.png)

Gender Deep Learning

![gender deep learning](static/img/model_reports/gender_deep_learning.png)

KNN Model

![knn model](static/img/model_reports/knn_model.png)

Accuracy  

![model chart](static/img/model_chart.JPG)

![winner](static/img/winner.JPG)

## Visualization

The Emotion Predictor runs as a client-side flask application, in its current edition it does not need nor contain a database. If we were to expand the project and use the user inputted files to be stored used as additional training inputs for the model a database would then be needed.

The application works by using the built-in functionality of HTML5 to allow the users browser to record and store the audio file, the file once recorded to passed into the FLASK app using the POST method where the file can then be run thru the audio parser, breaking it into features and then thru the model. The application uses two different models, one for emotion and one for Male/Female, this production as well as the probability of each emotion and sex is then passed into a JSON file as a dictionary that is used to generate the PLOTLY bar chart of emotions. 

![model test](static/img/model_test.JPG)

Test Clips

A similar function is used on the Test clips page, but the data is stored as a JSON file to avoid lag in the application attempting to call 8 audio files in a row to build the dictionary on each session. Instead, the page calls a stored dictionary and recalls the specific values for each of the 8 bootstrap cards, allowing for. A much more seem less user experience.

![sound](static/img/sound_card.JPG)

Sound cards made with `bootstrap` cards

![test clip1](static/img/test_clip1.JPG)

![test clip2](static/img/test_clip2.JPG)

Alexis Bar Chart

![Alexis](static/img/alexis_bar.JPG)

Emotion Visualizations made using Pandas

![calm](static/img/calm_vis.JPG)

![angry](static/img/angry_vis.JPG)

Tableau

![tableau 1](static/img/tableau1.JPG)

![tableau 2](static/img/tableau2.JPG)

## Learnings

Model Accuracy
*	The gender data contained more female data than male when we combined both the datasets.  The emotion data originally included neutral, calm, happy, sad, fearful, angry, disgust and surprise.  We combined neutral and calm because they were similar.


*	This was causing our model to predict female, and calm more than it should.  We took steps to remove extra female data and eliminated calm from our data.  This resulted in a more accurate model.
Predicting Gender
*	Even with an accurate model, it is still difficult to predict someone’s gender based on a person’s voice.  
* The only difference between the male and female larynx is size
*	Several investigators have argued that a comprehensive understanding of gender differences in vocal emotion recognition can only be achieved by replicating these studies while accounting for influential factors such as stimulus type, gender-balanced samples, number of encoders, decoders, and emotional categories. 

## Run Flask App

To Deploy our Flask App, please follow the below steps:

* step 1: Git clone our repository into your local

* from the folder in your terminal, type `python app.py` to launch site

## Heroku

[Emotion Predictor]( https://voice-emotion.herokuapp.com) 

## Resources

![faces](static/img/ball_faces.jpg)

RAVDESS Dataset: "The Ryerson Audio-Visual Database of Emotional Speech and Song (RAVDESS)" by Livingstone & Russo is licensed under CC BY-NA-SC 4.0 [Link](https://www.kaggle.com/uwrfkaggler/ravdess-emotional-speech-audio)

[TESS Dataset: Pichora-Fuller, M. Kathleen; Dupuis, Kate, 2020, "Toronto emotional speech set (TESS)", [Link](https://doi.org/10.5683/SP2/E8H2MF), Scholars Portal Dataverse, V1

[Link](https://tspace.library.utoronto.ca/handle/1807/24487)

[HTML Template](https://templatemo.com/tm-547-real-dynamic) 

[Google Doc Presentation](https://docs.google.com/presentation/d/1WQ2L1KWJT6c9SlYm7RMh6zrVnNrBERbFJMPgzOyNcTc/edit#slide=id.p)

## Contact

![team](static/img/team.JPG)

[Elliott McFarland](https://github.com/emcfarland) * [Celeste Muniz](https://github.com/celeste1030) * [Saroja Shreenivasan](https://github.com/shreeniv) * [Sai Prasanna](https://github.com/prasanna0913) * [Tim Samson](https://github.com/timsamson) * [Sara Simoes](https://github.com/Ssimoes48) 

![thanks!](static/img/squirel_potato.jpg)
