Public with sharing Class SamsungClass{
 Public Static void appleWatchmethod(list<Opportunity> lopt ){
    for (Opportunity opp : lopt) {
        Task t        = new Task();
        t.WhatId      = opp.Id;
        insert t;
     }
  }
 }