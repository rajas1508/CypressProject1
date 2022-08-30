import {Finance} from "../pages/Finance_main"

const Inv = new Finance()

// it('finance login', function()
// {
//     Inv.Login();
// })

// it('finance', function()
// {
//     Inv.Fina();
// })

// it('Payslip', function()
// {
//     Inv.Payslip();
// })

// it('Reimb', function()
// {
//     Inv.Reimb();
// })


// it('Logout', function()
// {
//     Inv.Logout();
// })

it('test',function()
{
    Inv.Login();
    Inv.Fina();
    //Inv.Reimb();
    //Inv.MyTDSCal();
    //Inv.MyInvDec_PreviousDeclarations();
    Inv.MyInvDec_TaxRegime();
})