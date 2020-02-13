({
 doInit : function(component, event, helper) {
 
        var actionVehicle = component.get("c.getVehicle");
        var actionCreatedBy = component.get("c.getCreatedBy");
        var actionModifiedBy = component.get("c.getModifiedBy");
        var actionLabels = component.get("c.getLabels");
        var actionDoorsPicklist = component.get("c.getDoorsPicklist");
        
        actionVehicle.setParams({
            recordId : component.get("v.recordId")
    	});
   
        actionCreatedBy.setParams({
            recordId : component.get("v.recordId")
    	});
        
        actionModifiedBy.setParams({
            recordId : component.get("v.recordId")
    	});
        
        actionLabels.setParams({
            recordId : component.get("v.recordId")
        });
        
        // Add callback behavior for when response is received
    	actionVehicle.setCallback(this, function(response) {
        	var state = response.getState();
        	if (component.isValid() && state === "SUCCESS") {
       component.set("v.Vehicle", response.getReturnValue());
        	}
        	else {
            	console.log("Failed with state: " + state);
        	}
    	});
    
    	actionCreatedBy.setCallback(this, function(response) {
        	var state = response.getState();
        	if (component.isValid() && state === "SUCCESS") {
       component.set("v.CreatedBy", response.getReturnValue());
        	}
        	else {
            	console.log("Failed with state: " + state);
        	}
    	});
        
    	actionModifiedBy.setCallback(this, function(response) {
        	var state = response.getState();
        	if (component.isValid() && state === "SUCCESS") {
       component.set("v.ModifiedBy", response.getReturnValue());
        	}
        	else {
            	console.log("Failed with state: " + state);
        	}
    	});
        
        actionLabels.setCallback(this, function(response) {
            
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.labels", response.getReturnValue());
            }
            else{
                console.log("Failed with state: " + state);
            }
        });
        
    	actionDoorsPicklist.setCallback(this, function(response) {
        	var state = response.getState();
        	if (component.isValid() && state === "SUCCESS") {
       component.set("v.numberOfDoors", response.getReturnValue());
        	}
        	else {
            	console.log("Failed with state: " + state);
        	}
    	});
        
    	// Send action off to be executed
    	$A.enqueueAction(actionVehicle);
        $A.enqueueAction(actionCreatedBy);
        $A.enqueueAction(actionModifiedBy);
        $A.enqueueAction(actionLabels);
        $A.enqueueAction(actionDoorsPicklist);
 
 }
    
})