import {LeaveManagement} from "../pages/LEAVE_REGISTER"
//import {LeaveManagement} from "../pages/Cancel_Leave"


const lmgmt = new LeaveManagement()

it('login test', function(){
    lmgmt.login();
})

// it('LeaveMg', function(){
//     lmgmt.LeaveMg();
// })

// it('LeaveReg', function(){
//     lmgmt.LeaveReg();
// })

// it('EncashLeave', function(){
//     lmgmt.EncashLeave();
// })

// it('ApplyCompOff', function(){
//     lmgmt.ApplyCompOff();
// })

it('CancelLeave', function(){
   
    lmgmt.CancelLeave();    
})

it('AttReport', function(){
    lmgmt.AttReport();   
})

it('Logout', function(){
    lmgmt.Logout();
})