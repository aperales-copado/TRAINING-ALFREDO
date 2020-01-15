Public with sharing Class AlcatelClass{
 Public Static void appleWatchmethod(list<Opportunity> lopt ){
    for (Opportunity opp : lopt) {
        Task t        = new Task();
        t.Subject     = 'Apple Watch Promo';
        t.Description = 'Send them one ASAP';
        insert t;
     }
  }
 }