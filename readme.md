
Automatisk API dokumentation på github pages:
https://benjamin762.github.io/compose-demo-project/


Den här dockerfilen är bättre än den föregående för att den bara installera beroenden som behöv i prod. Det ger mindre images och snabbare build då cache innehåller föregående lager som beror på färre saker än när man tar med alla dev deps så det ändras inte lika ofta.



Skärmdump av preview deployment
![preview deployment](preview_deployment.png)