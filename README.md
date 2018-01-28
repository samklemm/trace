# trace

## Inspiration: 
In light of current affairs and the recent exposures of high profile sexual assault scandals, many women and men have felt empowered to come forward with their own sexual assault stories. In response to this, we wanted to create a method to embolden even more women and men across the country to warn other women and men of their aggressors without having to testify against them in court or relive the event or take legal action. Our website, trace, allows women and men to fill out a report against their aggressors with information like: first name, last name, description of the aggressor, type of assault, location, and date of assault. Using these isolated reports, we compile them based on matches between name or location to determine which locations and people have a varied number of reporters and should be marked as dangerous or as sexual offenders. 

## What It Does:
When the user anonymously reports a person, he or she can enter first name*, last name*, description of the aggressor, type of assault*, location, and date of assault* (where only the starred items are required). When the user reports a location as dangerous, he or she MUST enter the location, type of assault, and date (all required). Type of assault is an enumeration in the form of a checklist where multiple options may be selected. The available options are: ‘1: Verbal harassment’, ’2: Unwanted touching - non sexual', '3: Unwanted touching - sexual', '4: Stalking', '5: Peeping', '6: Indecent Exposure’, ‘7: Full nonconsensual sexual intercourse’. 

In our website, each report will be aggregated by first name, last name, and zip code such that each unique entry of these three will be listed as one object and the first and last name will display in search as "flagged" after a threshold of 3 reports by 3 different people are met. The flag will have the total number of reports made against that individual, as well as a list of the types of sexual assault listed by the user. Additionally, the flag will have a color that changes based on the severity of the type of assault. Yellow flag means a reported incident of level 1 (Verbal Harassment) to level 2 (Unwanted touching - non sexual). Orange flag means a reported incident of level 3 (Unwanted touching - sexual) to level 5 (Peeping). Red flag means a reported incident of level 6 (Indecent Exposure) or higher. 

Each “assailant” is an instance of a unique combination of first name, last name, and zip code. These together will be the identifier that tracks the number of total reports in order to determine if this individual has crossed the threshold for a “reasonable” report.

The purpose of this service is not to prevent all sexual assault cases from happening, but to use the collective experiences of the community to warn people of potential threats that exist already within their community. Too many times has a victim of sexual abuse blamed themselves for the suffering of victims after them. Additionally, we hope that by seeing the number of total reported cases against aggressors, this will show victims that they aren’t alone and even encourage them to report the incident to law enforcement. 

## Pitfalls: 
1. Quite obviously, there is nothing preventing the creation of bogus sexual assault claims that were created out of hate. This system can be easily abused by either an individual with a vendetta or a group of people who wish to character assassinate another person. 
2. Additionally it is possible that in the real world there are two people of the same first and last name in the same zip code. If only one were a sexual offender, this would harm the reputation of the innocent person. 
3. Google Cloud bug —> local 

## Countermeasures: 
To counter this, we have defined thresholds to ensure that not every person reported is immediately listed as dangerous to the public. 

## Challenges

## How to Deploy:
Up until the end of February (when our Google Cloud Platform Key expires), we will be hosting it on appspot through [trace] (https://shehack-trace.appspot.com/)

To host locally, navigate to the trace folder in the command prompt/terminal and type 
```
npm start
```
or
```
node app.js
```

## Future Improvements:
  -Include functionality and preferences for men and LGBTQ community
  -Expand on accessibility features with the HTML pages
  
  This was built using
  Accomplishments
  what we learned
  what's next Trace
  built with 
