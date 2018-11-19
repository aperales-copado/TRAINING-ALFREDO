/*
This file is generated and isn't the actual source code for this
managed global class.
This read-only file shows the class's global constructors,
methods, variables, and properties.
To enable code to compile, all methods return null.
*/
global class EC_gMatchResult {
    global String AccountNote {
        get;
        set;
    }
    global Boolean anyMatch {
        get;
        set;
    }
    global TRIMEC.EC_gMatchedRecord BestAccount {
        get;
        set;
    }
    global TRIMEC.EC_gMatchedRecord BestContact {
        get;
        set;
    }
    global TRIMEC.EC_gMatchedRecord BestLead {
        get;
        set;
    }
    global TRIMEC.EC_gMatchedRecord BestMatch {
        get;
        set;
    }
    global Boolean Checked {
        get;
        set;
    }
    global String ContactNote {
        get;
        set;
    }
    global String LeadNote {
        get;
        set;
    }
    global List<TRIMEC.EC_gMatchedRecord> MatchedAccounts {
        get;
        set;
    }
    global List<TRIMEC.EC_gMatchedRecord> MatchedContacts {
        get;
        set;
    }
    global List<TRIMEC.EC_gMatchedRecord> MatchedLeads {
        get;
        set;
    }
    global EC_gMatchResult() {

    }
    global Integer getNoOfFoundAccountDupes() {
        return null;
    }
    global Integer getNoOfFoundContactDupes() {
        return null;
    }
    global Integer getNoOfFoundLeadDupes() {
        return null;
    }
}
