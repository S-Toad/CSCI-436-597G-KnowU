

{% include content_styles.html %}

# What's the Problem?

A large portion of our global population are affected by one or more mental disorders. If we can support those who are in distress, we may move towards providing professional care and resources and, hopefully, ultimately reduce the suicide rate and improve quality of life. This project is centered on the third SDG goals: **_Good Health and Well-Being_**.

## Statistics
According to the [World Health Organization](https://www.who.int/):
- Depression affects over 264 million people
- 800,000 people die from suicide annually
- Suicide is the second leading cause of death for young adults
- Lowered suicide rates is listed as an [indicator of target 3.4](https://sustainabledevelopment.un.org/sdg3#targets) of the Sustainable Development Goals

## Our Solution

We aim to support those who are in distress by proving a user-focused mental health app. Our solution is primarily targeted at those who often have and use their mobile phones. Our app aims to aid by providing a sense of mindfulness. We ask the user to complete a daily questionnaire that asks the user questions about their mood, anxiety, and other aspects of their life. With the data collected, we offer a week's glance of the user's mood as well as analytics. The analytics offers views of trends found within the data.

We may find that on days a user goes to classes, they experience the most anxiety. On days the user skips breakfast, their mood is often worse. We hope that by offering these insights to the user, they take a moment to reflect on these trends and consider actions they may take to improve their mental health.

### How Is This App Different Than Others?
- Open Source -- Anyone is able view and contribute to the source code
- Customizable -- Questionnaire is customizable to be tailored to the user
- Serverless -- Your data stays completely local and secured

### Technology & Libraries

- [React Native](https://reactnative.dev/) &mdash; Maximal portability between devices
- [Expo](https://expo.io/) &mdash; Open-source platform for creating React Native apps
- [regression-js](https://github.com/Tom-Alexander/regression-js) &mdash; Open-source regression library for data analysis 

# Research Methodology


## Literature Review
For this project we went through and read 12+ pieces of literature to get our heads around this project we were working on and how to best address this issue we were noticing. We noticed that social media was indicative of peoples moods. Certain factors would affect moods both positively and negatively; we wanted to explore that more with our application.

## System Review
As a group we studied 8 systems and how they tackled social media and mental health tracking. We found many mental health applications that are available but few that approached the solution from a ICT for development perspective. We wanted to work with people to help them understand how social media and other environmental factors affected their mood. 

## User Study
We conducted 4 interviews as a group. We found that our initial design of our project to be far too invasive. We had envisioned an application that would trace what a user was doing online indicate possible sources positively or negatively impacting their mood. Many users felt uncomfortable with this idea and was not comfortable using an app with this functionality. This led us to changing our application drastically to address this issue. We decided to set our goal to track how long someone was on an application and have them take a survey. Once that was done, we then would give them a generalized graph of their mood and the amount of time spent on an app.

## Design Prototypes

We generated our design prototype with [Marvel](https://marvelapp.com).

### Initial Design

After our literature review, we found research in the field of nlp to analyze and predict user's moods. We initially designed our application to be a service wheres use can sign up for monitoring.

{% include single_image.html src="design_1.png" %}

### Second Design

After our system analysis, we found that most applications available were mobile apps. We felt it was unreasonable to ask users to use a website when an app was much simpler to use. Thus we transitioned our designs to be a mobile app.

{% include double_image.html left="design_2_1.png" right="design_2_2.png" %}

### Final Design

After our user study, we found that our users did not like our color scheme. We updated it to be light and calming. Our users felt that the initial page was cluttered, so we started to focus on condensing the information shown to the user. Lastly, our users did not want to spend a long time completing the questionnaire. So we tackled this problem by adjusting the questionnaire to be much quicker to complete.

{% include double_image.html left="design_main.png" right="design_check_in.png" %}
{% include double_image.html left="design_analytics.png" right="design_resources.png" %}

# Final Product

## Images

{% include double_image.html left="journal.png" right="mood_graph.png" %}
{% include double_image.html left="mood_survey.png" right="resources.png" %}

## Video


{% include youtube_player.html id="J9TKs1XdOko" %}

# Future Works

There's several features we planned to have in our application:
- More analyses options
- Automatically discovering trends
- Customizable resources
- Customizable questionnaire
- Tracking app usage

This project may continue by first tackling those features. Further work can be explored by future user studies, determining additional features that users would appreciate in a mental health application.


# Developers

This project developed in CSCI 436/597G, Winter 2020, instructed by [Dr. Shameem Ahmed](https://facultyweb.cs.wwu.edu/~ahmeds/)

Alex Ayala &mdash; <ayalaa2@wwu.edu>  
Selome Zerai &mdash; <zerais@wwu.edu>  
Justin Hanson &mdash; <hanson36@wwu.edu>  
Morgan Stimpson &mdash; <stimpsm@wwu.edu>  
