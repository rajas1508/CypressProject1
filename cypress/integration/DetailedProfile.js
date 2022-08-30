

import {MyProf} from "../pages/MyProfile"

const DetProf = new MyProf()

describe('Detailed Profile', () => {

// beforeEach(() => {
//     cy.reload();
//     cy.visit('/');
//     })
  



it('login test', function(){
    DetProf.login();    
})

it('My Profile', function(){
    DetProf.Myprofile(); 
})

it('Basic Details', function(){
    DetProf.BasicDetails_top();
})

it('Basic Details_Add', function(){
    DetProf.BasicDetails_add();
})
it('Basic Details_Gender', function(){
    DetProf.BasicDetails_Gender();
})

it('Basic Details_Lang', function(){
    DetProf.BasicDetails_Lang();
})

it('PerDetails', function(){
   DetProf.PerDetails();
})

it('FamDet', function(){
    DetProf.FamDet();
 })

 it('Education SSC', function(){
    DetProf.Ed_SSC();
 })

 it('login test', function(){
    DetProf.Ed_HSC();
 })

 it('login test', function(){
    DetProf.Ed_Grad();
 })

 it('login test', function(){
    DetProf.Ed_PostGrad();
 })

it('logout test', function(){
    DetProf.Logout();
})

});