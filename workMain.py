import datetime
from time import time
import requests
from bs4 import BeautifulSoup
import time;
import pymongo;
import json;
from datetime import datetime, timedelta

myclient = pymongo.MongoClient("mongodb+srv://ekshvara:Imback2play@govtjobsnotification.cwqbg.mongodb.net/")
db = myclient["Notification"];
collection = db["notificationtodayData"];

# https://ekshvara.com/Govt_notification/notification.php?title=Deepak&content=UPSC%20Exams%20Start%20froms%20tomorrow

sendedTime = 7;
showNotificationIndex = 0;
overAllData = 0;

while 1:
    curr_time = time.localtime()
    curr_clock = time.strftime("%H:%M:%S", curr_time)
  
    hours = curr_clock[0:2];
    minute = curr_clock[3:5];

    if(hours == str(7)):
        print("Its time to fetch all the data")
        x = requests.get('https://www.sarkariresult.app/latest-jobs/')
        soup = BeautifulSoup(x.text,'html.parser')
        data  = soup.find_all("li",class_="su-post");
        verify = collection.find({"content":data[1].a.text});
        
        v1 = 0;

        for x in verify:
            v1= v1 + 1;
            
        if(v1 == 0):
            print("It is Null Data data is needed to added")
            for x in range(0,len(data)):
                try:
                    main_data = {"id":x,"content":data[x].a.text,"last_date":data[x].span.text}
                    collection.insert_one(main_data)
                    print(main_data)    
                except:
                    print("Not in the List");
        else:
            print("It is not a null data")
    
    elif(hours == str(3)):
        collection.drop();
        print("Its time to drop the data");
        sendedTime = "";

    else:
        verify = collection.find();
        v2 = 0;
        for x in verify:
            v2= v2 + 1;
        overAllData = v2
        
        
        if(showNotificationIndex != v2):
            verify = collection.find();
            print(verify[0]["content"])
            print("This is The Sening Time"+time.strftime("%H:%M:%S ", time.localtime(sendedTime)) + " "  + time.strftime("%H:%M:%S", time.localtime(time.time())))
            if(time.strftime("%H:%M:%S", time.localtime(time.time())) == time.strftime("%H:%M:%S", time.localtime(sendedTime)) or sendedTime == 7):
                print("Fetching The Notification_____________________________________________")
                showValue = requests.get("https://ekshvara.com/Govt_notification/notification.php?title="+str(verify[showNotificationIndex]["content"])+"&content="+str(str(verify[showNotificationIndex]["last_date"])));
                print(showValue.text);
                # sendedTime =  time.time()+1850;
                sendedTime =  time.time()+15;
                print("This is Same Now");

            showNotificationIndex = showNotificationIndex+1;
        else:
            print("Run From Starting Now Notification Index")
            showNotificationIndex = 0;


        

        


                
        
        
        
