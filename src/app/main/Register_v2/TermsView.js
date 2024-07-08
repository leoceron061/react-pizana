import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import {useHistory, useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import Error404Page from '../404/Error404Page'
import GeneralRegister from './GeneralRegister'
import CompanyRegisterFirstStep from './CompanyRegisterForms/CompanyRegisterFirstStep';
import CompanyRegisterSecondStep from './CompanyRegisterForms/CompanyRegisterSecondStep';
import store from '../ID_store/store'


const Root = styled('div')(({ theme }) => ({
  '& .PricingStyle3Page-header': {
    backgroundColor:"000000",
  },
  '& .PricingStyle3Page-price': {
    backgroundColor:"#edca33",
  },
}));


function TermsView() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,//0.1 is default time between show
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 1 },//y decides which way they come from
    show: { opacity: 1, y: 0 },//y moves it down-0 is default
  };

///////////////////////////////////////////
//function area
let history = useHistory(); // used to redirect after submit
const routeParams= useParams()//to access url variable

const handleClick= e => {
  if(e.target.id === "company")
  {history.push(`/terms/${e.target.id}`)}
  else{console.log("This is not working at the moment")}
}


//////conditional rendering
if(routeParams.type == "company")
{console.log(store.getState())
    if(!store.getState().id && !routeParams.step)
        {return(<GeneralRegister/>)}
    if(routeParams.step)
    {
      if(routeParams.step == '1'){return <CompanyRegisterFirstStep/>}
      if(routeParams.step == '2'){return <CompanyRegisterSecondStep/>}

    }

}


//////////////////////

////// render more buttons within the card
//instead of button redirecting change true/false flag taht creates more buttons that will redirect
//step screens needs to clarify in what step they are in out of how many
//allow users entry into dashboard sooner, and add a redirect button to dasahboard
if(!routeParams.type && !routeParams.step){return (
    <Root className="w-full">
      <div className="PricingStyle3Page-header flex" >
        <div className="p-24 w-full max-w-2xl mx-auto" style={{ backgroundColor:"black" }} >
          <div className="text-center my-128 mx-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}//0,40 is default, animates the title
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            >
              <Typography color="#edca33" className="font-Regular text-32 md:text-52">
              PIZANA PLATFORM AGREEMENT TERMS AND CONDITION OF USE
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              
            </motion.div>
          </div>
        </div>
      </div>

          <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">
            PREAMBLE
            </Typography>
                <Typography className="text-16" color="black">
This agreement (“Agreement”) governs the relationship between the entity or person that accepts the terms and conditions of this Agreement by signing or accepting this Agreement (“You,” “Your” or “User”) and PIZANA, Inc. (“Us,” “Our,” “We” or “PIZANA”). Once agreed by You, PIZANA will provide You with access to the PIZANA Platform (as further defined herein), which will facilitate Your ability to create and assign work, post work and/or accept work on the PIZANA Platform, as further described below and, if applicable to You, in one or more Schedules attached to the end of this Agreement (the “Services”).
For the purposes of this Agreement, You and PIZANA may each be referred to as a “Party” and collectively as the “Parties.” Authorized Account Users of the Services are not themselves a ‘party’ to this Agreement but are bound by the Terms Conditions of use of the PIZANA Platform and Services appearing in this Agreement, and must be agreed to by all users upon first login to the PIZANA Platform (and are otherwise available HERE).
You may not access the Services or accept this Agreement if you are not at least 18 years old. If you do not agree with all the provisions of this Agreement, you must not access or use the PIZANA Platform or the Services. By entering this Agreement, you represent that you are eligible to enter this Agreement and that you will abide by and agree to the terms and conditions of this Agreement.


                </Typography>

              <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">
           GENERAL TERMS AND CONDITIONS
            </Typography>
                <Typography className="text-16" color="black">
These General Terms and Conditions shall apply to ALL Users of the PIZANA Platform, regardless of Role or the type of transaction pursued by the User on the PIZANA Platform.
                </Typography>
                <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">
           
1. DEFINITIONS

            </Typography>
                <Typography className="text-16" color="black">
“Account” refers to Your account details that You set up with Us when you start to use the PIZANA Platform.
“Affiliate” means with respect to any person or entity, any other entity controlling, controlled by, or under common control with such person or entity at the time in question. For the purposes of this definition, control means (i) the possession, directly or indirectly of the power to direct, or cause the direction of the management or policies of such entity, whether through the exercise of voting power, by contract or otherwise, or (ii) ownership of more than 50% of the equity interest of such entity.
“Applicable Law” refers to all federal, state, provincial, territorial, and local laws, statutes, regulations, rules, and ordinances governing User’s activities that occur on, using or are facilitated in any way by the PIZANA Services and/or the PIZANA Platform including, as applicable all laws and regulations relating to the operation, maintenance and use of motor vehicles, heavy equipment and the transport of cargo.
“Authorized Account User(s)” refers to User(s) who are employees or designated agents of another User. Authorized Account Users must be approved by PIZANA and must sign up for a User “Account.”


“Broker” refers to a legal entity that subcontracts Shipment Assignments to other Operators.
“Broker-Operator” refers to an Operator that is also a Broker.
“Company Contracted Vehicle” refers to a vehicle operated and owned by a third-party service provider that has a direct contractual relationship with a Customer, and not with PIZANA. Except as may be expressly provided herein, PIZANA is not responsible for the terms, conditions or obligations set out in agreements involving Company Contracted Vehicles beyond providing the specified Services to You as outlined in this Agreement. Such transactions are governed by the terms and conditions set out in Schedule A in respect to a Customer assigning Shipment Assignments to Company Contracted Vehicles, and Schedule D in respect to Drivers of Company Contracted Vehicles.
“Company Contracted Operator” refers to a third-party service provider that directly contracts with the Customer to provide Company Contracted Vehicles.
“Company Owned Vehicle” refers to a vehicle of transportation owned by a Customer.
“Customer” refers to a User on the PIZANA Platform that is provisioning PIZANA Services to manage Private Carriage Shipments and/or post Shipment Assignment to find additional transportation capacity. Users on the PIZANA Platform acting in the role of Customer agree to the terms and conditions of this Agreement, including the terms and conditions set forth on Schedules A and B.


“Driver” is an individual that operates a vehicle.
“Non-Asset Broker” is a Broker that does not own any vehicles but subcontracts Shipment Assignments to other Operators.
“Operator”-refers to a person, sole proprietor or business entity that manages, has direct control, or operates vehicles for the purpose of transporting materials. Operators who contract for Private Carriage Shipments agree to the additional terms in Schedule A and D, and Operators who contract with Customers via the PIZANA Marketplace agree to the additional terms in Schedule C.
“Order Form” refers to the document memorializing the details between Customer and PIZANA, such as fees, number of Authorized Account Users, and additional terms and conditions related to the use of the specific Services sought by the User. The terms of the Order Form are binding upon its execution by both PIZANA and the User.
“Private Carriage Shipment” refers to a Shipment Assignment that is undertaken by a Company Contracted Vehicle or a Company Owned Vehicle. Customers that assign Private Carriage Shipment Assignments are bound by the terms of Schedule A.
“Rate” refers to the rate information that a User enters into a Shipment Assignment.
“Role” refers to the type of User on the PIZANA Platform. Roles include, for example, Customer, Operator, Driver, and Broker.
“Shipment Assignment” refers to a PIZANA Platform transaction for the transport of materials posted or assigned by a Customer.
“Shipment Cost” refers to the amounts payable and paid to an Operator for completing a Shipment Assignment.
“Service Fee” refers to the fees payable to PIZANA for Services rendered by PIZANA to a Customer.
“Services” refers to the services available to a User on the PIZANA Platform. The exact Services a User may enjoy depends upon the User’s Role and the Services identified in this Agreement or an Order Form signed between a Customer and PIZANA.

”PIZANA Platform” refers to the technology platform provided by PIZANA that connects Users that operate Vehicles to Customers who seek to transport cargo. The Services may include the ability for Users to manage, communicate, and execute logistics management activities with vehicles via a PIZANA managed and operated website at www.PIZANA.co and successor websites and associated mobile applications that include, but are not limited to, the PIZANA ONLINE.  and PIZANA Drive mobile applications and any other PIZANA branded or operated mobile applications.
“PIZANA Services” or “Services” refers to the services made available by PIZANA via the PIZANA Platform to a User. Such Services may include, not limited to, PIZANA Digital Dispatch Service, PIZANA Marketplace Service, PIZANA Fleet Manager Service, PIZANA Order Delivery Tracker Service, PIZANA Chrome Experience, and PIZANA Analytics. The User’s access to a specific Service depends upon the User’s Role, as memorialized in this Agreement or an executed Order Form.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">
      2. PIZANA SERVICES
 
            </Typography>
            <Typography variant="h4" className="pb-32 font-Regular">
      
      
2.1 ACCESS RIGHTS TO PLATFORM

</Typography>

<Typography className="text-16" color="black">

PIZANA grants to User and, if applicable, User’s Authorized Account Users who agree to this Agreement, access to the Services for User’s internal business purposes in accordance with the terms and conditions of this Agreement. Without limiting the foregoing, under no circumstances may User or any Authorized Account User use the Services to re-sell services in competition with PIZANA, or to sell PIZANA Services to a third party unless otherwise authorized by PIZANA.

  </Typography>

  <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     
2.2 ADDITIONAL AUTHORIZED ACCOUNT USERS
</Typography>

<Typography className="text-16" color="black">
Provided that each additional Authorized Account User agrees to this Agreement, Customer may extend the access rights granted in the previous section to User’s Affiliates and its or their respective employees and contractors. For purposes of this Agreement, the signatory to this Agreement shall be responsible for the acts and omission of its Authorized Account Users.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     

            2.3 PIZANA GENERAL DISCLAIMER OF RESPONSIBILITY AND WARRANTY
</Typography>

<Typography className="text-16" color="black">
Beyond provision of the PIZANA Platform and Services described herein PIZANA makes no representations or warranties as to the services provided by third parties who may also be using our PIZANA Platform. We do not guarantee the fitness, reliability or skills of any User, or in particular any carrier or Operator of any vehicle, nor do We guarantee that any Shipment Assignment you post on our PIZANA Platform will be accepted, and even if accepted, that it will be fulfilled or that your cargo or materials will be safely transported.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     
            2.4 PIZANA NOT RESPONSIBLE FOR DATA OR USE OF THE PIZANA PLATFORM
</Typography>

<Typography className="text-16" color="black">
Other than safeguarding any personal information You share with us (as further described in our Privacy Policy and, as applicable, our California Privacy Notice and providing the PIZANA Platform and Services for Your use, PIZANA shall have no responsibility for the data that You the User or any other User (regardless of Role) enters into the PIZANA Platform, including, for example, data that is part of a Shipment Assignment or Private Carriage Shipment. PIZANA also cannot guarantee and does not represent or warrant as to the accuracy, completeness or timeliness of any data that Users enter onto the PIZANA Platform unless such data is directly captured natively by the PIZANA Platform. You use of the PIZANA Platform is at your own risk, regardless of your Role or the activities and functions used by You.

</Typography>
<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     
            
2.5 PROVISION OF ADDITIONAL SERVICES AND SUPPORT SERVICES

</Typography>
<Typography className="text-16" color="black">
Upon request, Users may seek additional support and services from PIZANA in the nature of training, technical and administrative support beyond what is typically provided by PIZANA to Users. Such “Additional Services” shall be contracted for using an Order Form executed by the parties hereto.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     
            

            2.6 USER ROLES AND ADDITIONAL TERMS AND CONDITIONS AS TO USE OF SERVICES
</Typography>

<Typography className="text-16" color="black">
Users and Authorized Account Users may have one or many Roles when using or accessing Services via the PIZANA Platform. Depending on the User’s Role, the User may be subject to additional terms and conditions as set out in one or more Schedules attached to this Agreement. Should there be a conflict between the terms and conditions set out in the Schedules and the main Agreement, the terms of the relevant Schedule shall control. The ‘relevant schedule’ shall be the schedule governing the User’s activities.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     
            
            3. OWNERSHIP RIGHTS; DATA; CONSENT TO MESSAGING
            
</Typography>

<Typography variant="h4" className="pb-32 font-Regular">     
           
3.1 THE PIZANA SERVICES AND PLATFORM BELONG TO US

</Typography>

<Typography className="text-16" color="black">

The PIZANA Platform, including all software and Services provided hereunder, and all rights therein are and shall remain PIZANA’s property or the property of PIZANA’s licensor(s) (as applicable). Neither this Agreement nor Your use of the Services convey or grant to You or any Authorized Account User(s) any right, title, or interest (i) in or related to the Platform or the Services, except for the limited access right described above; or (ii) the PIZANA company names, logos, product, service names, trademarks or service marks, or those of PIZANA’s licensor(s) that may appear as part of the Services.


</Typography>
<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     
            
            3.2 WE RETAIN RIGHTS TO USAGE INFORMATION
            
</Typography>
<Typography className="text-16" color="black">


PIZANA may monitor User’s use of the Services. PIZANA may collect and compile data and information related to the use of the Services (“Usage Information”). As between PIZANA and You, all right, title and interest in Usage Information and all intellectual property rights therein, belong to and are retained solely by PIZANA. PIZANA retains the right to use and publicize the Usage Information (without disclosing the identity of Customer or any particular individual) in compliance with Applicable Law and the terms of the PIZANA Privacy Policy, where said Policy may be amended from time to time.
</Typography>
<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     
            
            3.3 USER FEEDBACK
            
</Typography>
<Typography className="text-16" color="black">


If User sends or transmits any communications or materials to PIZANA by mail, email, telephone, or otherwise, regardless of the content of those communications (“Feedback”), PIZANA is free to retain and use such Feedback without further consultation, attribution, or compensation to You. By agreeing to the terms of this Agreement, You hereby assign to PIZANA all right, title, and interest in, and waive all rights you might otherwise have in your Feedback.


</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     
     
3.4 MESSAGING, NOTIFICATIONS AND CHAT FEATURES

            
</Typography>

<Typography className="text-16" color="black">
By creating an Account, You agree that PIZANA and the PIZANA Platform may send electronic communications to You as part of the Services provided hereunder. Such messages may be in the form of application notifications, text messages sent as part of an SMS system, or sent and received via chat functionality that may be present in one or more of the PIZANA applications.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     
     
            3.4.1 OPTING OUT OF TEXT MESSAGING
            
</Typography>


<Typography className="text-16" color="black">

   
Any User may opt-out of receiving text (SMS) messages from PIZANA at any time by replying ‘NO’ to the initial SMS message or ‘STOP’ to an SMS message or by emailing support@PIZANA ONLINE. .com. You expressly acknowledge that opting out of receiving text (SMS) messages may impact the use and functionality of the Services.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">     
     
          
3.4.2 CHANGING OR STOPPING NOTIFICATIONS

            
</Typography>

<Typography className="text-16" color="black">

  
Users may deselect, if applicable, specific types of in-application notifications and messages under settings within the various PIZANA applications, or by emailing support@PIZANA.co.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    


            3.4.3 CHAT FUNCTIONALITY IS FOR BUSINESS PURPOSES ONLY

            
</Typography>

<Typography className="text-16" color="black">

Certain PIZANA applications available through Our Services include ‘chat’ functionality. You agree to use in-application text chatting capabilities for business purposes only. PIZANA reserves the right to withdraw this function from any User that abuses the feature; or uses the feature for any inappropriate or non-business-related purpose.  
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    


            3.5 PIZANA RESERVATION OF RIGHTS      

            
</Typography>

<Typography className="text-16" color="black">

PIZANA reserves all rights not expressly granted to User in this Agreement. Nothing in this Agreement grants, by implication, waiver, estoppel, or otherwise, to User or any third party any intellectual property rights or other right, title, or interest in or to products, services, content, or other materials made available to Users via the Services by PIZANA.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    


            4. USER CONDUCT AND OBLIGATIONS  

            
</Typography>

<Typography variant="h4" className="pb-32 font-Regular"> 


4.1 YOU ARE RESPONSIBLE FOR YOUR CONDUCT ON THE PLATFORM

</Typography>

<Typography className="text-16" color="black">

PIZANA provides the PIZANA Platform for your convenience. However, other than providing the Services via the PIZANA Platform, all activity on the PIZANA Platform is your responsibility. Specifically, regardless of Role, You are responsible for Your actions when using our Services, including, to the extent applicable, obtaining and maintaining all necessary licenses, authorizations, approvals and consents for information and content User provides through our Services and comply with all applicable law, other legal requirements, and contractual requirements in relation to its use of the Services. If You have Authorized Account Users, then You are also responsible for the activities of all of those Authorized Account Users, and any act or omission by an Authorized Account User that would constitute a breach of this Agreement if taken by User will be deemed a breach of this Agreement by User. User shall make all Authorized Account Users aware of this Agreement’s provisions as applicable to such Authorized Account User’s use of the Services and the PIZANA Platform and shall cause Authorized Account Users to comply with such provisions.

</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    


            4.2 RESTRICTIONS ON USER’S USE OF THE PIZANA PLATFORM
            
</Typography>
<Typography className="text-16" color="black">


User shall not use the Services for any purposes beyond the scope of the access granted in this Agreement. User shall not at any time, directly or indirectly, and shall not permit any Authorized Account Users to: (i) copy, modify, or create derivative works of the Services or documentation, in whole or in part; (ii) rent, lease, lend, sell, license, sub-license, assign, distribute, publish, transfer, or otherwise make available the Services or documentation; (iii) reverse engineer, disassemble, decompile, decode, adapt, or otherwise attempt to derive or gain access to any software component of the Services, in whole or in part; (iv) remove any proprietary notices from the Services or documentation; or (v) use the Services or any content provided via the PIZANA Platform in a manner or for any purpose that infringes, misappropriate, or otherwise violates any intellectual property rights, privacy rights or other rights of any person or entity, or that violates Applicable Law. User further agrees to comply with Applicable Law when using the Services and agrees not to use the Services for any unlawful purpose. Without limiting the foregoing, You expressly agree not to use the Services or any function or feature of the Services to commit any crime or to harass, threaten or invade the privacy of any person, or to cause property damage or personal injury. In certain instances, User may be required to provide proof of identity or other documentation to access or use the Services and User acknowledges and agrees that User may be denied access to the Services for failure to comply with such requests.


</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    


            4.3 ACCOUNT SET UP, MAINTENANCE AND SECURITY            

</Typography>

<Typography variant="h4" className="pb-32 font-Regular">    


4.3.1 ACCOUNTS          

</Typography>

<Typography className="text-16" color="black">

Users, including all Authorized Account Users must register for and maintain an active Account with PIZANA. Users must be at least 18 years of age to obtain an Account. Depending on User’s Role, Account registration may require User to submit to PIZANA certain personal and business information, such as Your name and contact details, as well as regulatory and licensing documentation or credentials. You expressly agree to provide and maintain accurate, complete, and up-to-date information to PIZANA in connection with setting up and maintaining your Account. You further expressly authorize PIZANA, at its sole discretion, to review, maintain, verify, and validate the information you provide to Us using any reasonable business means, including the use of a third-party managed and operated or publicly available databases. Consistent with this authorization, You acknowledge and agree that we may share the information You provide with third parties so that we can validate your credentials.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    

            4.3.2 ACCOUNT SECURITY         

</Typography>

<Typography className="text-16" color="black">
User expressly agrees to maintain the security and secrecy of User’s Account credentials, including User’s username and password at all times. User further agrees not to share Your username or password with any third party and Users may not assign or transfer their Accounts to any other person or entity. Unless otherwise permitted by PIZANA in writing, each User may only possess one Account. Any failure to provide or maintain accurate, complete, and up-to-date Account information, including having a valid payment method on file (applicable to Operator and Customers), or User’s deliberate failure to maintain Account security may result in (i) the relevant User’s inability to access and use some or all of the Services, or (ii) termination of Your User Account and this Agreement.

</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    

          
4.4 NETWORK ACCESS AND DEVICES
     

</Typography>

<Typography className="text-16" color="black">

User is solely responsible, at its own cost and expense, for obtaining computer devices and data network access services necessary to use the Services and the PIZANA Platform. PIZANA does not guarantee that the Services, or any portion thereof, will function on or with any particular hardware or devices, or with any other software or network. It is each User’s responsibility to ensure that its hardware, software, devices, and network(s) are compatible with the Services. In addition, the Services and the PIZANA Platform may be subject to malfunctions and delays including without limitation, those inherent in the use of the Internet and electronic communications.
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    


            5. TERM AND TERMINATION 

</Typography>

<Typography variant="h4" className="pb-32 font-Regular">    

5.1 TERM

</Typography>

<Typography className="text-16" color="black">


This Agreement is effective upon execution by the User and shall continue indefinitely until terminated by User or PIZANA, as set forth in this Agreement.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    

            5.2 SUSPENSION OF SERVICES

</Typography>

<Typography className="text-16" color="black">

 
User may discontinue the use of the PIZANA Services at any time, for any reason, with or without terminating this Agreement. PIZANA may disable User’s (and/or any Authorized Account Users’) access to the Services at any time in the event of a breach or suspected breach of this Agreement or for any other cause in PIZANA’s reasonable discretion. PIZANA expressly reserves the right to refuse access to the Services at any time for any reason not prohibited by law. 


</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    

            5.3 TERMINATION; TERMINATION OF ORDER FORM

</Typography>


<Typography className="text-16" color="black">

Either Party may terminate this Agreement: (i) for the other Party’s material breach of this Agreement which is not cured within 30 days of written notice from the non-breaching Party (or immediately if the breach is incapable of being cured); or (ii) immediately in the event of insolvency or bankruptcy of the other Party, or upon the other Party’s filing or submission of request for suspension of payment (or similar action or event) against the terminating party. Any outstanding payment obligations set out in Section 6 or that are set out in any executed Order Form shall survive any termination or expiration of this Agreement.

Notwithstanding the foregoing, an Order Form may override the terms of this Section 5.3. Where there is a conflict between termination terms of this Agreement and the Order Form agreed between Us, the terms of the Order Form shall prevail. Furthermore, the termination of an Order Form will not terminate this Agreement unless otherwise expressly agreed in the Order Form.



</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    

            6. PAYMENTS, INVOICES, TAXES
</Typography>

<Typography variant="h4" className="pb-32 font-Regular">    

6.1 PAYMENTS
</Typography>


<Typography className="text-16" color="black">


Depending on your Role and activities on the PIZANA Platform, Users may incur Service Fees and other charges for Services as detailed in applicable Schedule(s) and Order Form(s) (as well as invoices issued to User(s)). All payments due shall be paid in accordance with the terms stated herein or as otherwise explicitly expressed in each Schedule or Order Form and/or invoice, as applicable. User agrees that PIZANA may use any lawful means reasonably necessary to collect payments for all fees and charges due from User, and that PIZANA shall be entitled to immediately suspend or terminate this Agreement in the event User or any Authorized Account User(s) do not pay fees due and owing from said User (or Account Users) in a timely way. User also agrees that any commercially reasonable amounts necessary to collecting any amounts due and payable to PIZANA, including but not limited to interest and administrative costs incurred in the event that a claim or lawsuit must be filed in court shall be borne and payable by User.

  </Typography>

  <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    

            6.2 INVOICE DISPUTES

</Typography>

<Typography className="text-16" color="black">
Any disputes or claims between User and PIZANA for the Services shall be made by Customer to PIZANA by electronic email to support@PIZANA.co  In general, unless specified elsewhere, User shall have eight (8) days from the date of the invoice to dispute any item on a PIZANA invoice. Customer shall have the right to withhold payment for any amounts disputed provided that Customer raises a dispute with PIZANA in accordance with this section. Customer shall not withhold payment for any amounts not in dispute. The Parties agree to use commercially reasonable efforts to resolve any invoice disputes.
</Typography>


  <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            6.3 TAXES
            
</Typography>

<Typography className="text-16" color="black">
User acknowledges and agrees that, depending on User’s Role and the Services User accesses, User may be required to: (i) complete all tax registration obligations and calculate and remit all tax liabilities related to User’s provision of services to third parties using Our Platform; and (ii) provide PIZANA with all relevant tax information. Failure to provide up to date, accurate and valid tax information may result in delay of payments from or payable to you. User further acknowledges and agrees that User is responsible for taxes on its own income arising from the performance of services for third parties using the Services, and the conduct of your business. All Service Fees payable by User under this Agreement are exclusive of taxes and similar assessments. User is responsible for all sales, use and excise taxes, and any other similar taxes, duties, and charges of any kind imposed by any federal, state, or local governmental or regulatory authority on any amounts payable or receivable by User hereunder.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            7. WARRANTY 
            
</Typography>
<Typography className="text-16" color="black">

PIZANA warrants that the PIZANA Platform and the Services will be provided in a professional and workmanlike manner, consistent with applicable industry standards. EXCEPT FOR THE FOREGOING WARRANTY, THE PIZANA PLATFORM AND SERVICES ARE PROVIDED "AS IS" AND, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, PIZANA HEREBY DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE ARISING OUT OF OR RELATING TO THIS AGREEMENT, THE SERVICES PROVIDED HEREUNDER AND THE PIZANA PLATFORM. WITHOUT LIMITING THE FOREGOING, PIZANA EXPRESSLY DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES ARISING OUT OF OR RELATING TO THE DATA AND CONTENT COMPRISING AND/OR PRESENT ON THE PIZANA PLATFORM, INCLUDING ITS ACCURACY, COMPLETENESS AND SECURITY AND FURTHERMORE, PIZANA SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT, AND ALL WARRANTIES ARISING FROM COURSE OF DEALING, USAGE, OR TRADE PRACTICE. WITHOUT LIMITING THE FOREGOING, PIZANA MAKES NO REPRESENTATION OR WARRANTY OF ANY KIND THAT THE PRODUCTS OR SERVICES PROVIDED HEREUNDER, OR RESULTS OF THE USE THEREOF, WILL MEET YOUR OR ANY OTHER PERSON'S REQUIREMENTS, OPERATE WITHOUT INTERRUPTION, ACHIEVE ANY INTENDED RESULT, BE COMPATIBLE OR WORK WITH ANY SOFTWARE, SYSTEM, OR OTHER SERVICES, OR BE SECURE, ACCURATE, COMPLETE, FREE OF HARMFUL CODE, OR ERROR FREE.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            8. LIMITATIONS OF LIABILITY           
</Typography>
<Typography className="text-16" color="black">
EXCEPT FOR A PARTY’S INDEMNIFICATION OBLIGATIONS OR BREACHES OF CONFIDENTIALITY, OR FOR YOUR PAYMENT OBLIGATIONS, IN NO EVENT WILL EITHER PARTY'S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT UNDER ANY LEGAL OR EQUITABLE THEORY, INCLUDING BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, AND OTHERWISE EXCEED THE TOTAL SERVICES FEE PAID TO PIZANA UNDER THIS AGREEMENT IN THE 12-MONTH PERIOD PRECEDING THE EVENT GIVING RISE TO THE CLAIM. IN NO EVENT WILL EITHER PARTY BE LIABLE UNDER OR IN CONNECTION WITH THIS AGREEMENT UNDER ANY LEGAL OR EQUITABLE THEORY, INCLUDING BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, AND OTHERWISE, FOR ANY: (a) CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY, SPECIAL, ENHANCED, OR PUNITIVE DAMAGES; (b) INCREASED COSTS, DIMINUTION IN VALUE OR LOST BUSINESS, PRODUCTION, REVENUES, OR PROFITS; (c) LOSS OF GOODWILL OR REPUTATION; (d) USE, INABILITY TO USE, LOSS, INTERRUPTION, DELAY, OR RECOVERY OF ANY DATA, OR BREACH OF DATA OR SYSTEM SECURITY; OR (e) COST OF REPLACEMENT GOODS OR SERVICES, IN EACH CASE REGARDLESS OF WHETHER PIZANA WAS ADVISED OF THE POSSIBILITY OF SUCH LOSSES OR DAMAGES OR SUCH LOSSES OR DAMAGES WERE OTHERWISE FORESEEABLE. THIS SECTION 8 WILL NOT APPLY TO ONE PARTY’S VIOLATION OF THE OTHER PARTY’S INTELLECTUAL PROPERTY RIGHTS.
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
                
9. INDEMNIFICATION            
</Typography>

<Typography className="text-16" color="black">

PIZANA shall defend User against any claim or action brought against User, and will indemnify and hold harmless User from and against any damages, liabilities, costs or expenses (including reasonable attorneys’ fees) awarded by a court or included as part of a final settlement, to the extent based upon the infringement by the Services of any United States patent, trademark or copyright of a third party (“Claims”), provided that (a) PIZANA is promptly notified in writing of any Claim, (b) PIZANA has sole control over the defense and/or settlement of the Claim, and (c) User gives PIZANA all available information and assistance (at PIZANA’s expense) to enable PIZANA to do so. In addition, if, as the result of any Claim, User is enjoined from using the Services, PIZANA, at its sole option and expense, may: (a) procure the right for User to continue to use the Services; (b) replace or modify the Services so as to make them non-infringing (without materially impacting functionality or performance); or (c) if PIZANA is not able to accomplish either of the foregoing alternatives on commercially reasonable terms, terminate User’s license to the Services and refund to User any prepaid, unused Service Fees. The foregoing indemnity shall not apply if the Claim results from: (a) Services that have been modified by anyone other than PIZANA or its subcontractors; (b) User’s use of the Services with software, hardware or services not provided by PIZANA; (c) misuse of the Services or other breach of this Agreement; (d) use of other than the most current, unaltered corrections and updates to the Services which have been provided to User at no additional charge; or (e) compliance by PIZANA with designs, plans or specifications furnished by or on User’s behalf. PIZANA shall not be liable hereunder for any settlement made by User without PIZANA’s advance written approval. User will indemnify, defend and hold harmless PIZANA from and against any Claims brought against PIZANA arising out the circumstances described in this paragraph. THE FOREGOING STATES THE ENTIRE LIABILITY OF RUXWITH RESPECT TO ANY THIRD-PARTY INFRINGEMENT CLAIMS.

</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
                

            10. CONFIDENTIALITY, PRIVACY, PUBLICITY AND MARKETING 
         
</Typography>
<Typography variant="h4" className="pb-32 font-Regular">    
                
10.1 CONFIDENTIALITY
      
</Typography>

<Typography className="text-16" color="black">
Each Party acknowledges and agrees that in the performance of this Agreement, such Party may have access to or may be exposed to, directly or indirectly, confidential information of the other Party (“Confidential Information”). Confidential Information includes all information of User or PIZANA, including the transaction volume, marketing and business plans, business, financial, technical, operation and such other non-public information of Customer or PIZANA (whether disclosed in writing or verbally). Each Party hereto acknowledges and agrees that: (a) all Confidential Information shall remain the exclusive property of the disclosing Party; (b) the recipient Party of Confidential Information shall not use such Confidential Information for any purpose except in furtherance of this Agreement; (c) neither Party shall disclose the other Party’s Confidential Information to any third party, except to its employees, officers, contractors, agents, and service providers (“Permitted Persons”) as necessary to perform under this Agreement, provided Permitted Persons are bound in writing to obligations of confidentiality and non-use of Confidential Information not less protective than the terms hereof; and (d) the Parties shall return or destroy all of the other Party’s Confidential Information upon the termination of this Agreement or at the request of the disclosing Party. Notwithstanding the foregoing, Confidential Information shall not include any information to the extent it: (a) is or becomes part of the public domain through no act or omission on the part of the recipient party; (b) was possessed by the recipient Party prior to the date of this Agreement without an obligation of confidentiality; (c) is disclosed to the recipient party by a third party having no obligation of confidentiality with respect thereto; or (d) is required to be disclosed pursuant to law, court order, subpoena or governmental authority.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            10.2 PRIVACY

</Typography>


<Typography className="text-16" color="black">


PIZANA’s collection and use of personal information in connection with the Services is as provided in PIZANA’s Privacy Policy, and, as applicable its California Privacy Notice, the terms of which are incorporated into his Agreement by reference. User acknowledges that the PIZANA Privacy Policy and its California Privacy Notice may change from time-to-time, as provided in said policies. To the extent anything in said Privacy Policy, or (as applicable) the PIZANA California Privacy Notice conflicts with these Terms and Conditions, the terms of said policy(ies) shall prevail.


  </Typography>

  <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
10.3 PUBLICITY AND MARKETING 
</Typography>
<Typography variant="h4" className="pb-32 font-Regular">   
10.3.1 USE OF TRADEMARKS AND TRADE NAMES
</Typography>
<Typography className="text-16" color="black">
During the Term of this Agreement, User grants to PIZANA a non-exclusive, non-transferable right, without the right to sublicense, to use User’s trademarks, trade names and logos for the purpose of marketing and selling PIZANA’s products and services. PIZANA may place such trademarks, trade names and logos within its catalogues, promotional literature, advertising material, customer lists and signs, but only in connection with the promotion and sale of the Services and access to the PIZANA Platform. Any other use of User’s trademarks, trade names or logos by PIZANA shall be subject to prior written approval by User.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         

            10.3.2 PRESS RELEASE

</Typography>
<Typography className="text-16" color="black">
Following the execution of this Agreement, User and PIZANA may jointly issue a mutually agreeable press release announcing the Parties’ entry into this Agreement. Prior to the issuance of such press release and subject to the terms of this Agreement, neither of User nor PIZANA shall issue any press release or public announcement regarding this Agreement, or the matters contemplated hereby without the prior written consent of the other Party. 

</Typography>

</div>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
11. INDEPENDENT CONTRACTOR; NO AGENCY

            </Typography>
            <Typography className="text-16" color="black">
            The relationship between the Parties under this Agreement is solely that of independent contracting businesses. The Parties expressly agree that: (i) this Agreement is not an employment agreement and does not create an employment relationship, between PIZANA and User; and (ii) no joint venture, partnership, or agency relationship exists between PIZANA and User (unless explicitly specified). Where, by implication of Applicable Law, or otherwise, you may be deemed an agent or representative of PIZANA, you undertake and agree to indemnify, defend with counsel appointed by PIZANA and paid by you, and hold PIZANA harmless from and against any and all claims threatened or initiated by any person or entity based on any implied agency or representative relationship between You and PIZANA.
              
              </Typography>


              <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            12. NOTICES

            </Typography>

            <Typography className="text-16" color="black">
            Any notice delivered to PIZANA will be delivered in writing and sent (including through the use of electronic mail) to PIZANA using the contact details below.

TO PIZANA

PIZANA, Inc.

C/O Contract Management
            </Typography>

            <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            13. GENERAL

            </Typography>
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            13.1 CHOICE OF LAW AND VENUE

         </Typography>

            <Typography className="text-16" color="black">
            The interpretation of this Agreement shall be under Massachusetts law, without regard to the choice or conflicts of law provisions of any jurisdiction. Any disputes, actions, claims, or causes of action arising out of or in connection with this Agreement or the Services shall be subject to the exclusive jurisdiction of the state and federal courts located in the Commonwealth of Massachusetts. All actions involving PIZANA must be filed in an appropriate Court in the Commonwealth of Massachusetts.

            </Typography>

            <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            13.2 NON-WAIVER

            </Typography>

            <Typography className="text-16" color="black">

            The failure of a Party to enforce any term or terms of this Agreement shall not act as a waiver against future enforcement, and the other Party acknowledge and expressly agree that such Party, shall at all times be entitled to enforce each and every provision of the Agreement, even if it has not done so previously. Each Party agrees that the other shall never be deemed to have relied on its failure to enforce any provision of the Agreement and waives and releases all such defenses to enforcement of the Agreement.
              </Typography>


              <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            13.3 ASSIGNMENT

            </Typography>

            <Typography className="text-16" color="black">

            You may not assign this Agreement without PIZANA’s prior written approval. PIZANA may assign this Agreement without your consent to: (i) an Affiliate; or (ii) an acquirer of or successor to PIZANA’s equity, business or assets. Any purported assignment in violation of this section shall be void. No joint venture, partnership, employment or agency relationship exists between you, PIZANA or any other third party as a result of this Agreement, access to the PIZANA Platform or use of the Services. 
              </Typography>


              <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            13.4 SEVERABILITY

            </Typography>

            <Typography className="text-16" color="black">
            If any provision of this Agreement is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under the law.

              </Typography>

              <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            13.5 AUTHORITY

            </Typography>
            <Typography className="text-16" color="black">
            Each of the Parties agrees that it is fully authorized to enter into this Agreement on behalf of his/her respective Party and has full authority to bind that Party to the terms of this Agreement.
              </Typography>
           
           
              <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            13.6 FORCE MAJEURE

            </Typography>
            <Typography className="text-16" color="black">
            Neither Party shall be liable for any failure or delay in the performance of its obligations hereunder (other than payment obligations) due to causes that are beyond the reasonable control, including, but not limited to, an act of God, act of civil or military authority, fire, epidemic, flood, earthquake, riot, war, terrorism, sabotage, and governmental action; provided that the affected Party: (i) gives the other Party written notice of such cause promptly; and (ii) uses its reasonable efforts to correct such failure or delay.
              </Typography>
           
           
              <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            13.7 ENTIRE AGREEMENT

            </Typography>
            <Typography className="text-16" color="black">
            This Agreement, together with any applicable, executed Order Form(s) (executed by You or by your organization if you are an Authorized Account User), any Schedule(s) attached to this Agreement (to the extent applicable to You), and the PIZANA Privacy Policy and, as applicable to You, the California Privacy Notice, shall constitute the complete agreement between us and shall be in effect immediately once You indicate your agreement to these terms by clicking the ‘ACCEPT’ button at the end of this Agreement (or by executing this Agreement in ink and delivering same to PIZANA). In the event the terms of this Agreement conflict with the terms of any other agreement entered into by the Parties, the terms of this Agreement shall apply. Any terms and conditions on any transactional or shipment-specific document, including, but not limited to, any bill of lading, dock receipt or similar documentation exchanged between the Parties or an Operating fulfilling a Shipping Assignment, other than these terms and conditions shall not apply to any Services performed under this Agreement and shall not be binding on or applicable to PIZANA.
              </Typography>

              <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            13.8 CHANGES TO THIS AGREEMENT

            </Typography>
            <Typography className="text-16" color="black">
            PIZANA may amend the Agreement from time to time. Amendments will be effective upon PIZANA’s delivery of such updated Agreement in accordance with the Notices provision in Section 12 of this Agreement. Your continued access of the PIZANA Platform and/or the Services after such notice constitutes your consent to be bound by the Agreement, as amended.
              </Typography>


              <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
         
            SCHEDULE A:
            </Typography>
            <Typography variant="h4" className="pb-32 font-Regular">  
PIZANA PLATFORM - MANAGE AND DELIVER
</Typography>
<Typography className="text-16" color="black">
This Schedule A (“Schedule”) sets forth the additional terms and conditions applicable to Users in the Role of “Customer” (and, as applicable, Customer’s Authorized Account Users) (“You” or “Customer”) who use the PIZANA Platform to manage their own transportation, transportation service providers and transportation tracking without engaging PIZANA to manage or match Operators or Drivers that may be subscribed to the PIZANA Platform. Such Customers may use the PIZANA Platform to: (i) create Shipment Assignments; (ii) monitor, manage and review Shipment Assignment(s); and (iii) assign and manage Private Carriage Shipment(s). 
  </Typography>

  <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            1. PIZANA’S LIMITED OBLIGATIONS.
</Typography>
<Typography className="text-16" color="black">
1.1 Customer expressly acknowledges that, for purposes of the Services described under this Schedule, PIZANA shall have no responsibility whatsoever to Customer beyond the provision of the PIZANA Platform to schedule and manage Company Owned Vehicles and/or Company Contracted Vehicles. Customer further acknowledges that PIZANA, to the fullest extent permitted by Applicable Law, expressly disclaims all representations and warranties regarding the Services and the PIZANA Platform, as well as the completeness, reliability and timeliness of the information exchanged between the Customer and other Users on the PIZANA Platform, and further disclaims all liability arising out of the acts, omissions or misrepresentations of Users with whom Customer may arrange Shipment Assignments, including claims and damages from property damage, death and bodily injury, or damage or loss of data or cargo or any other liability arising in connection with any Company Owned Vehicles or Company Contracted Vehicles.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            1.2 PIZANA IS NOT RESPONSIBLE FOR ARRANGEMENTS BETWEEN CUSTOMERS AND DRIVERS OR OPERATORS 
</Typography>
<Typography className="text-16" color="black">
Assignments of Private Carriage Shipments under this Schedule involve the use of Company Owned Vehicles and Company Contracted Vehicles.

Regardless of whether Customer assigns Private Carriage Shipments to a Company Owned Vehicle, or a Company Contracted Vehicle, Customer and not PIZANA, shall be solely responsible for that transaction, including but not limited to the transportation of the shipment, the safety and security of the cargo, PIZANA and recipients, and the terms, conditions and obligations contained in any agreements related to such transactions. Furthermore, unless Customer opts to take advantage of PIZANA’s optional Payment Service, any payments due to those that undertake the Private Carriage Shipments are the responsibility of Customer and not PIZANA.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            2. CUSTOMER’S REPRESENTATIONS AND WARRANTIES 
</Typography>
<Typography className="text-16" color="black">
2.1 Customer represents and warrants that its use of the Services and the PIZANA Platform are lawful and will comply with all Applicable Law. Without limiting the foregoing, Customer further represents and warrants that it is duly and legally qualified in accordance with all Applicable Law to operate as a business and can undertake Private Carriage Shipments pursuant to a lease or other binding contract between the Customer and either (i) its own Company Owned Vehicles or (ii) the Company Contracted Vehicles owned by one or more Operators. When Customer is using the PIZANA Platform to assign and manage Shipment Assignments for Private Carriage Shipments using Company Owned Vehicles and/or Company Contracted Vehicles, Customer expressly acknowledges and agrees that all of the obligations of that arrangement are between Customer and Company Driver, or Customer and Company Contracted Operator, as applicable.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            3. SERVICES; INVOICES; OPTIONAL PAYMENT SERVICE
            
</Typography>
<Typography variant="h4" className="pb-32 font-Regular">    
3.1 INVOICING
            
</Typography>
<Typography className="text-16" color="black">
Invoices for Service Fees due and payable by the Customer under this Schedule, including the payment terms agreed between Customer and PIZANA, shall be specified in the Order Form. Any dispute or concerns regarding an invoice shall be governed by the terms of the applicable Order Form and this Agreement.
</Typography>
<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            3.2 PAYMENT OF SERVICE FEES  
</Typography>

<Typography className="text-16" color="black">
Except as provided in this section, payment of Service Fee(s) associated with all Private Carriage Shipment Assignments undertaken pursuant to this Schedule are the Customer’s exclusive responsibility. If the Customer elects to subscribe to PIZANA’s optional Payment Service in the Order Form, then Customer hereby appoints PIZANA as an agent solely for the purpose of disbursing the Shipment Cost(s) to Drivers and Operators. Customer shall provide the necessary information to enable PIZANA to disburse funds on the Customer’s behalf.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            4. ORDER DELIVERY TRACKER; INFORMATION DISCLOSURE 
</Typography>
<Typography variant="h4" className="pb-32 font-Regular">  
4.1 DELIVERY TRACKING
</Typography>

<Typography className="text-16" color="black">
The “Order Delivery Tracker” is an independent extension to the Services provided by PIZANA to Customer upon request and where feasible. If Customer elects to use the Order Delivery Tracker Service, then Customer expressly acknowledges and agrees that the Order Delivery Tracker Service requires PIZANA to share information entered by Customer that would be made available to the recipient of the Order Deliver Tracker. Information may include but is not limited to names; phones numbers; GPS location data of Customer, Drivers of Company Owned Vehicles, or Company Contracted Vehicles; and Customer’s client information (if it has been provided). Customer expressly represents and warrants that it has all necessary permissions and consents to disclose information used in the Order Delivery Tracker. 

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            5. GRIEVANCES AND DISPUTES
</Typography>
<Typography className="text-16" color="black">
All grievances and disputes for Private Carriage Shipments under this Schedule shall be the Customer’s sole responsibility. Request for assistance should be directed to PIZANA’s support team at support@pizanalawfirm.co.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            6. ADDITIONAL INDEMNIFICATION, LIABILITY, INSURANCE
</Typography>
<Typography variant="h4" className="pb-32 font-Regular">   
6.1 ADDITIONAL INDEMNITY
</Typography>
<Typography className="text-16" color="black">
Customer shall indemnify, defend and save PIZANA, including its employees, and agents harmless from and against any and all liabilities, claims, losses, costs, fines, penalties, expenses (including attorney’s fees), judgements, or demands on account or damage of any kind whatsoever (including but not limited to personal injury, death, property damage, cargo loss or damage, or any combination thereof), suffered or claimed to have been suffered by any person or persons, to the extent arising out of or caused by the Customer’s breach of this Agreement or Customer’s negligence or willful misconduct.

</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            6.2 LIABILITY AND INSURANCE
</Typography>
<Typography className="text-16" color="black">
Customer represents, warrants, and agrees that it carries and will maintain insurance providing liability coverage for all activities undertaken by Customer using the Services and/or the PIZANA Platform, including without limitation, a commercial general liability policy with a minimum limit of $1,000,000 per occurrence. Customer further expressly acknowledges that PIZANA shall have no obligation and shall not provide any insurance coverage to or benefitting Customer in relation to Private Carriage Shipment Assignments covered by this Schedule.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            SCHEDULE B:
</Typography>

<Typography variant="h4" className="pb-32 font-Regular">    
PIZANA PLATFORM - FIND
</Typography>

<Typography className="text-16" color="black">
This schedule B (“Schedule”) sets forth the additional terms and conditions under which a User in the Role of “Customer,” (and as applicable Customer’s Authorized Account Users) (“You” or “Customer”) may use the PIZANA Platform to post and manage Shipment Assignments on the PIZANA Platform through PIZANA Marketplace.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            1. CUSTOMER’S REPRESENTATIONS AND WARRANTIES 
</Typography>

<Typography variant="h4" className="pb-32 font-Regular">    
1.1 LEGAL EXISTENCE
</Typography>

<Typography className="text-16" color="black">
Customer represents and warrants that it is either (i) a sole proprietor or (ii) a legally formed business entity that is utilizing the Service to connect with Drivers, Operators or Brokers for the purpose of arranging the lawful transportation of materials.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            1.2 COMPLETENESS OF OFFERS OF SHIPMENT ASSIGNMENTS
</Typography>

<Typography className="text-16" color="black">
Customer represents and warrants that it will use reasonable commercial efforts to post Shipment Assignments that are accurate and complete such that they provide to potential Operators and Brokers all the information necessary to determine whether there is a reasonably good match to each Shipment Assignment. Without limiting the foregoing, Customer expressly represents that each Shipment Assignment You post shall include complete pickup and delivery location information, delivery instructions, required or desired vehicle type, cargo information, and the offered Rate.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            1.3 OFFERING OF SHIPMENT ASSIGNMENTS
</Typography>

<Typography className="text-16" color="black">
Customer expressly agrees that its offers of Shipment Assignments and the terms of engagement with Operators who agree to undertake said Shipment Assignments, will occur pursuant to the “Rules of Engagement” that appear in Section 4, below. Customer expressly acknowledges and agrees to abide by the Rules of Engagement.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            1.4 SPECIAL REPRESENTATIONS APPLICABLE TO BROKER OPERATORS
</Typography>
<Typography className="text-16" color="black">
If Customer seeks to post Shipment Assignments pursuant to this Schedule, but is also an Operator, then such Operator is, for purposes of this Schedule and its posting of Shipment Assignments, also a “Broker-Operator.” As a Broker-Operator, You represents and warrants that You are duly and legally qualified in accordance with Applicable Law to broker Shipment Assignments to other Operators. 
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular">    
            2. PIZANA’S LIMITED OBLIGATIONS; LEGAL COMPLIANCE DISCLOSURES
</Typography>
<Typography variant="h4" className="pb-32 font-Regular"> 
2.1 PIZANA IS A LIMITED BROKER AND NOT A CARRIER.
</Typography>

<Typography className="text-16" color="black">
For purposes of activities occurring pursuant to this Schedule, PIZANA is acting: (i) solely as a broker of transportation vehicles and logistical services for Customers posting Shipment Assignments; and (ii) as a provider of a technology platform that allows Customer to post and manage its own Shipment Assignment(s). Customers using the PIZANA Platform to post and manage Shipment Assignments expressly acknowledge and agree that PIZANA itself is not a carrier and is NOT responsible for providing shipping services, and that the actual transportation of Shipment Assignment(s) shall be performed by third parties who shall be solely responsible and liable for the carriage of those Shipment Assignments.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
2.2 PIZANA LIMITED ROLE AS PAYMENT AGENT
</Typography>

<Typography className="text-16" color="black">
The Customer hereby appoints PIZANA as its agent solely for the purpose of disbursing payments to Operators on its behalf. Such disbursements shall be based on the Rate set out in the Shipment Assignment and may also include any other mutually agreed payments between Customer and Operator.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 

2.3 INSURANCE
</Typography>
<Typography className="text-16" color="black">
If required by Applicable Law, PIZANA shall comply with all insurance and bonding requirements imposed upon it, including, if applicable, its obligation to maintain a surety bond to benefit the Customer. All other obligations to procure and maintain insurance shall be borne solely by the Customer or the Operator (as applicable), unless otherwise specified in Section 9 of this Schedule.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 

3. TERMS AND CONDITIONS APPLICABLE TO OPERATORS; RIGHT TO REQUEST DOCUMENTATION OF CREDENTIALS

</Typography>

<Typography className="text-16" color="black">
The general terms and conditions applicable to Operators with whom Customer may contract in connection with Shipment Assignments, including Operators’ representations and warranties, are set out in Schedule C. In addition, Customer (and/or its representatives available at the point of pick up or delivery) shall have the right to request from any Operator that has accepted a Shipment Assignment any commercially reasonable proof of legal compliance, identity, authority, license, insurance, and corporate existence as Customer deems necessary or desirable. Customer may also request that Operators complete site-specific safety training, provided that the Customer has appropriately notated this in its Shipment Assignment as a requirement.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 

            4. RULES OF ENGAGEMENT APPLICABLE TO CUSTOMERS 

</Typography>

<Typography variant="h4" className="pb-32 font-Regular"> 

4.1 THE OFFER PROCESS

</Typography>

<Typography className="text-16" color="black">

Customer’s posting of a Shipment Assignment constitutes Customer’s express offer of a Shipment Assignment to qualified Operators on the PIZANA Marketplace. The Service shall facilitate the presentation of Customer’s offer of a Shipment Assignment to qualified Operators pursuant to Section 1.2 of this Schedule. Customer may withdraw its offer of a Shipment Assignment per the terms of Section 4.3, below.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 


4.2 THE ACCEPTANCE PROCESS
</Typography>

<Typography className="text-16" color="black">
The act of acceptance of an offer to undertake a Shipment Assignment is done by the Operator pressing the ‘ACCEPT’ button or otherwise indicating acceptance as directed on the page or application through which the Operator is reviewing the proposed Shipment Assignment. Once an Operator accepts a Shipment Assignment, the Customer and the Operator are deemed to have entered a binding digital contract to fulfill the Shipment Assignment based on the Shipment Assignment information provided and pursuant to the terms and conditions of this Schedule B (as applied to the Customer) and Schedule C (as applied to the Operator).
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 


            4.3 CANCELLING SHIPMENT ASSIGNMENTS AND INTERRUPTING SHIPMENT ASSIGNMENTS IN PROCESS 
</Typography>
<Typography className="text-16" color="black">
You may reasonably cancel an accepted Shipment Assignment prior to the commencement of the Shipment Assignment or end a Shipment Assignment during the fulfillment of such Shipment Assignment. Unreasonable or repeated cancellations of accepted Shipment Assignments, particularly once a fulfillment begins, may result in reconsideration of Customer’s continued use of the PIZANA Platform, and possible claims of damages.

Customer shall be entitled to cancel an accepted Shipment Assignment if Operator fails to provide documentation of Operator’s credentials as reasonably requested by Customer.

Notwithstanding the foregoing, unless cancellation is the result of severe weather or a force majeure event, and the Customer is unable to provide alternative Shipment Assignments, Customer’s cancellation of an accepted Shipment Assignment within two (2) hours before the scheduled start time (as specified in the Shipment Assignment) will result in a cancellation fee equal to four (4) times the hourly rate of the requested truck type.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 

            4.4 RATE AND BILLABLE AMOUNT
</Typography>

<Typography className="text-16" color="black">
Customer is responsible for setting the Rate, which is the amount per unit that the Customer will pay for the transporting of materials. A ‘unit’ may be measured as, but not limited to: (i) per load; (ii) per shift; (iii) per ton; or (iv) per hour. The amount payable for the hauling of materials shall be calculated by the Service, which will result in a billable amount to the Customer.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            4.5 DISPUTES; ADDITIONAL AMOUNTS; ADJUSTMENTS
            
</Typography>

<Typography className="text-16" color="black">
If Customer believes that an adjustment to a previously agreed Rate is warranted, then the Customer may initiate such additional amounts or an adjustment in Rate by using the dispute function on the PIZANA Platform. Customer shall have forty-eight (48) hours after the completion of each Shipment Assignment to register a dispute with the Operator (the “Dispute Period”) unless otherwise agreed to by PIZANA. Alternatively, Customer may contact PIZANA support at support@PIZANA ONLINE. .com within the Dispute Period and filing an electronic written request for assistance in resolving the dispute.

It is Customer’s responsibility to review the progress of Shipment Assignments on the PIZANA Platform and identify any issues regarding Shipment Assignments (delays, failures to perform, etc.) within the Dispute Period. Disputed Shipment Assignments that are timely filed by Customers will be withheld from the invoice cycle pending further resolution. Except for those good faith disputes identified by Customer or Operator during the Dispute Period, Customer shall pay any undisputed amounts to PIZANA in accordance with the terms of this Agreement.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            4.6 ACKNOWLEDGEMENT OF CUSTOMER’S RIGHT TO ADJUST RATES
            
</Typography>
<Typography className="text-16" color="black">
Customer acknowledges and agrees that the Service consists of technology that enables customers similar to Customer to post Shipment Assignments for the purpose of allowing Operators, at their sole discretion, to accept Shipment Assignments that best meet each Operator’s objectives. Customer may adjust the Rate for Shipment Assignments based on the lack of prevailing interest or a high level of declines of any or all of Customer’s Shipment Assignments.
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            4.7 CUSTOMER WAIVER REGARDING DISCLOSURE AND USE OF INFORMATION
            
</Typography>
<Typography className="text-16" color="black">
Customer expressly acknowledges that that the information that Customer provides via the PIZANA Platform about Shipment Assignments will be shared with the Operator. Customer represents and warrants that it has the authority to release all such information, which may include information that is Customer’s client information. Customer further represents and warrants that all of the information that it receives about the Operator will be used solely for the purpose of fulfilling Customer’s relevant Shipment Assignments and that Customer will not use, disclose or sell such information beyond its intended purpose as described in this Schedule.
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            4.8 SHIPPING DOCUMENTS
</Typography>
<Typography className="text-16" color="black">
Unless otherwise agreed in writing, all Shipment Assignments tendered or delivered using the PIZANA Platform or Services shall be accepted on a ‘bill of lading’ which shall function as a receipt of the goods only. The terms and conditions of such bill of lading will not apply to the transportation provided pursuant to or as a result of the Services provided under this Agreement. Upon request of Customer, PIZANA shall instruct Operators and Drivers to obtain a delivery receipt from the recipient of the materials, showing the materials delivered, condition of the shipment, and the date and time of such delivery, unless otherwise directed by the Customer.
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            5. ESTABLISHED CUSTOMER OPERATOR RELATIONSHIPS
</Typography>

<Typography className="text-16" color="black">
Customer has the right to invite an Operator to become a Regular. A “Regular” means an Operator can only see Shipment Assignments from those Customers which an Operator is a Regular to. Notwithstanding the foregoing, the Operator shall have the sole right to determine whether to accept a Customer’s invitation to become a Regular. An Operator may also in its sole discretion at any time, seek removal from being a Regular with a Customer or all Customers.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            6. ADVERTISING AND PROMOTION
</Typography>

<Typography className="text-16" color="black">
Customer expressly agrees and consents to PIZANA’s use and promotion of Customer’s Shipment Assignment(s) on the PIZANA Platform.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            7. SERVICES, RATES AND PAYMENTS
</Typography>

<Typography variant="h4" className="pb-32 font-Regular"> 
7.1 SERVICES FEES AND SHIPMENT FEES
</Typography>

<Typography className="text-16" color="black">
For Customer Shipment Assignments posted on the PIZANA Marketplace using the Service, the Rate that is entered by Customer, and the calculated billable amount to the Customer shall be the amount invoiced to the Customer. Customer acknowledges and understands that the amount invoiced shall consist of both a Service Fee and Shipment Cost. The Service Fee represents payments due to PIZANA for the provision of its Services and is generally a percentage of the calculated billable amount. PIZANA shall take a Service Fee from the calculated billable amount with the residual disbursed on Your behalf to the Operator.


</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            7.2 INVOICE AND PAYMENT TERMS
</Typography>
<Typography className="text-16" color="black">
PIZANA shall invoice Customer all billable amounts based on Shipment Assignments completed using the Service. All charges for a given week of work (Sunday to the following Saturday) are due on the third (3rd) Friday following your use of the Service for that week, and payment will be facilitated by PIZANA using the preferred payment method designated in your Account. PIZANA will send you a statement by email, no later than fifth day of the week following the week in which the Services were performed for billable amounts incurred during such week. PIZANA reserves the right to delay charging your account for up to hundred and twenty (120) days for reasons related to disputes or for compliance with Applicable Law, provided that in such case, PIZANA provide reasonable evidence that such charges remain due and owing.
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            7.3 CREDIT WORTHINESS

</Typography>
<Typography className="text-16" color="black">
Each Customer may be required to complete a credit application form to determine credit worthiness when using the Service. Customer consents to PIZANA’s use of a third-party credit agency to assess the credit application. PIZANA shall issue to Customer a credit limit and may adjust that credit limit based on, but not limited to, the timely payments of PIZANA invoices, Customer’s selected payment method, and the ongoing review of Customer’s credit standing.
</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
         7.4 PAYMENT METHOD

</Typography>
<Typography className="text-16" color="black">
Prior to the posting of Shipping Assignment(s), Customer must have an established payment method with PIZANA on the PIZANA Platform for Services. PIZANA accepts credit card payments as well as electronic payment transfers using automatic clearing house (ACH). PIZANA reserves the right to pass on to Customer any administrative fees for transaction failures and chargebacks, provided that such administrative fees can be reasonably demonstrated as a direct result of Customer not having sufficient clear funds on the day of payment. If Customer is using a credit card as the primary payment method, then PIZANA further reserves the right to use a credit card pre-authorization to secure funds for the Shipment Assignments prior to the day of payment.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            8. GRIEVANCES, DISPUTES, DELAYS IN DELIVERY.

</Typography>
<Typography variant="h4" className="pb-32 font-Regular"> 
8.1 GRIEVANCES AND DISPUTES WITH OPERATORS
</Typography>
<Typography className="text-16" color="black">
Any disputes between Customer and any Operator shall be between those parties. However, in the event that either Customer or Operator do not appropriately respond to any disputes raised, either party may contact PIZANA Support at support@PIZANA ONLINE. .com and report the issue. PIZANA shall take reasonable steps to facilitate discussions between the parties.
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            8.2 ACCIDENTS OR DELAYS

</Typography>

<Typography className="text-16" color="black">

To the extent that PIZANA has been notified by the Operator of an accident or other event that inhibits the Operator’s ability to fulfill an accepted Shipment Assignment, PIZANA shall use commercially reasonable efforts to redirect the message to the Customer.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            9. ADDITIONAL INDEMNIFICATION, LIABILITY, INSURANCE

</Typography>
<Typography variant="h4" className="pb-32 font-Regular"> 
9.1 ADDITIONAL INDEMNITY

</Typography>

<Typography className="text-16" color="black">
Customer shall indemnify, defend and save PIZANA, including its employees, and agents harmless from and against any and all liabilities, claims, losses, costs, fines, penalties, expenses (including attorney’s fees), judgements, or demands on account or damage of any kind whatsoever (including but not limited to personal injury, death, property damage, cargo loss or damage, or any combination thereof), suffered or claimed to have been suffered by any person or persons, to the extent arising out of or caused by the Customer’s breach of this Agreement or Customer’s negligence or willful misconduct (including, but not limited to, Customer’s issuance of incomplete or inaccurate instructions). 
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            9.2 PIZANA INSURANCE

</Typography>


<Typography className="text-16" color="black">
PIZANA represents, warrants, and agrees that it carries and maintains insurance providing liability coverage, including a commercial general liability policy, for the work performed by Operators and its Drivers on the PIZANA Marketplace and contracted with the Customer through the PIZANA Platform. Customer shall have the rights to be named as an additional insured on a certificate of insurance. Customer shall have the right to seek a valid certificate of insurance at any time during the term of the Agreement. PIZANA reserves the right to alter or remove any or all such insurance policies at any time, without your prior consent or approval and with them with other similar or equivalent insurance policies. Within seven days of receipt of a written or email request from You, PIZANA will furnish a complete and accurate description of the specific coverage and liability limits of all such insurance policies maintained by PIZANA, as of the date the request was received. In accordance with prior and future agreements between PIZANA and any Operator, the Customer warrants, represents, and agrees that such insurance policies maintained by any Operator are primary to any of PIZANA’s insurance and that PIZANA’s insurance policies shall be noncontributory until the policies of the Operator are exhausted. PIZANA warrants, represent, and agrees that after the insurance policies of the Operator are exhausted, such insurance policies maintained by PIZANA shall apply only up to limits specifically outlined in the policies maintained by PIZANA, and that such insurance policies maintained by You shall be non-contributory until PIZANA’s insurance policies are exhausted. For any outstanding claim amounts after the insurance policies of the Operator and PIZANA’s are exhausted, You waive and release all rights of subrogation of any and all of your insurance providers, including without limitation those of any worker’s compensation, general liability, automobile liability, and property policy providers. 

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            9.3 CUSTOMER INSURANCE   

</Typography>

<Typography className="text-16" color="black">
Customer represents and warrants that it carries and will maintain insurance providing liability coverage sufficient to cover all of its activities relating to the posting and fulfillment of Shipment Assignments on the PIZANA Platform, including coverage for lost, damaged or delayed cargo, personal injury and death, property damage, and all activities of Drivers and Operators hired through the Services, including without limitation, a commercial general liability policy with a minimum limit of $1,000,000 per occurrence. It is further understood that PIZANA’s insurance will be primary, and the insurance provided by Customer and its Affiliates shall be excess and shall not called upon by PIZANA’s insurers for contributing, deficiency, concurrent, double insurance, or otherwise, and shall provide for a severability of interests of cross-liability clause. Any and all deductible or retention sums specific to PIZANA’s insurance policies shall be assumed by, for the account of, and at the sole risk of, PIZANA.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            SCHEDULE C:

</Typography>

<Typography variant="h4" className="pb-32 font-Regular"> 
PIZANA PLATFORM - DRIVE 

       </Typography>

       <Typography className="text-16" color="black">

       This schedule C (the “Schedule”) sets forth the terms and conditions under which a User in the Roles of “Non-Asset Broker”, or “Operator,”’ (“You” “Your,” “Operator” or “Non-Asset Broker”) (may accept and undertake Shipment Assignments available on the PIZANA Platform using PIZANA Marketplace. (For the avoidance of doubt, this Schedule does not cover Drivers of Company Owned Vehicles and Company Contracted Vehicles, whose activities are governed by Schedule D).
       </Typography>


       <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            1. OPERATOR ACKNOWLEDGEMENTS, OBLIGATIONS, REPRESENTATIONS AND WARRANTIES.

</Typography>

<Typography variant="h4" className="pb-32 font-Regular"> 
1.1 QUALIFICATIONS TO PROVIDE SERVICES 

         </Typography>
         <Typography className="text-16" color="black">

         If You are accepting a Shipment Assignment through PIZANA Marketplace, then You represent and warrant that You are duly and legally qualified in accordance with all Applicable Law to provide for-hire motor vehicle carrier services and the transportation services contemplated herein to third parties. You further represent and warrant that You do not and will not, during the term of this Agreement, have an unsatisfactory or unfit safety rating issued by any regulatory authority with jurisdiction over Your operations, including, but not limited to, the Federal Motor Carrier Safety Administration, of the United States Department of Transportation. You further represent and warrant that during the Term of this Agreement, you will comply with all Applicable Law in the performance of your services under this Schedule.
         </Typography>



         <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            1.2 DOCUMENTATION OF CREDENTIALS


</Typography>
<Typography className="text-16" color="black">
You agree to provide to PIZANA documentation of your credentials and licenses (and those of your Drivers, as applicable) detailing your authority and qualifications to provide the services contemplated herein. This documentation may include, but may not limited to, Operator’s compliance documents, government authorizations, California CARB compliance certificates, a commercial PIZANA’s license, and other similar licensing and safety credentials as reasonably requested by PIZANA or any Customer. Failure to provide documentation as requested may result in Your suspension from the Services or be limited in your usage of the PIZANA Platform and Services. Furthermore, You hereby consent to PIZANA’s reasonable use of third-party providers to validate the documentation that You provided. You expressly agree that PIZANA may share the documentation with Customers for purposes of fulfilling Services hereunder. You further understand and agree to carry current copies of all such documentation and to make it available to Customer upon request. You understand a Customer has a right to cancel any Shipment Assignments for the failure to provide documentation at any time. 
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            1.3 YOU MUST PROVIDE YOUR OWN EQUIPMENT


</Typography>



<Typography className="text-16" color="black">
You represent, warrant and agree that You shall, at your sole cost and expense: (i) furnish all equipment and vehicles necessary or required for the performance of your obligations hereunder, including the fulfillment of all accepted Shipment Assignment(s); (ii) pay all expenses related, in any way, with the use and operation of the equipment and vehicles; and (iii) maintain the equipment and vehicle in good repair, mechanical condition and appearance.

You further represent and warrant that You are solely responsible for determining the most effective, efficient, and safe manner to perform each Shipment Assignment.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            1.4 INDEPENDENT CONTRACTORS


</Typography>

<Typography className="text-16" color="black">

You are an independent contractor, and You shall be solely responsible for the safe operation of your own vehicle(s) and equipment. You expressly acknowledge and agree that it is Your sole responsibility to control the means of fulfilling Shipment Assignments and to ensure compliance with Applicable Law when operating vehicles, equipment and in determining the selection of routes. You assume complete responsibility for all state and federal taxes, assessments, insurance (including, but not limited to, worker’s compensation, unemployment compensation, disability, pension, and social security insurance), and any other financial obligations arising out of the services You provide and the transportation of cargo You perform hereunder.
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            1.5 PIZANA RIGHTS TO HANDLE BILLING AND COLLECTION


</Typography>

<Typography className="text-16" color="black">
Operator acknowledges and agrees that PIZANA shall have the exclusive right, as your appointed agent, to handle all billing and collection of fees in connection with Shipment Assignments that You undertake and fulfilled pursuant to this Schedule. You expressly agree to refrain from all collection efforts against any Customer, receiver, or shipper that you do business with on the PIZANA Platform pursuant to this Schedule without PIZANA’s prior written consent. 
</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            1.6 REPRESENTATATIONS REGARDING PERFORMANCE OF SERVICES


</Typography>
<Typography className="text-16" color="black">
You expressly represent, warrant and agree that:
</Typography>

<Typography className="text-16" color="black">

1.6.1 Once You accept a Shipment Assignment under this Schedule You will perform the services detailed in the Shipment Assignment pursuant to the “Rules of Engagement” with the Customer, that are detailed in this Schedule, and as specified in Section 8, below.

1.6.2 You understand the terms and conditions of this Schedule, as well as the terms, Rate and other specific instructions as set out in the Shipment Assignments you accept as the terms that shall be applied to your completed Shipment Assignments. Except as may be required by Applicable Law, in no event shall any provisions of Your standard tariff, terms and conditions, service guides, bill of lading, or similar documentation apply to the performance of Shipment Assignments You accept via the PIZANA Marketplace under this Schedule.

1.6.3 You will undertake Shipment Assignments that You accept from the PIZANA Marketplace in accordance with all the instructions provided by Customer (or Customer’s representatives), without delay, and You further agree that all events that may cause delay shall be immediately communicated to the Customer and then PIZANA. If instructions pertaining to the collection, transportation and/or delivery of materials under a Shipment Assignment are not clear, it is Your sole responsibility to seek clarification from the Customer before physically accepting the materials.

1.6.4 You will perform the transportation services described in every Shipment Assignment with due care and diligence, timely and in a professional and workmanlike manner in accordance with the standards of care and service generally accepted in Your trade. Without limiting the foregoing, You acknowledge and agree that You are solely responsible for determining the most effective, efficient, and safe manner to perform each Shipment Assignment.


1.7 RECEIPTS AND BILLS OF LADING

Each Shipment Assignment hereunder shall be evidenced by a bill of lading acceptable to PIZANA naming Operator as the transporting carrier. Upon delivery of each Shipment Assignment made hereunder, Operator shall obtain a receipt showing the kind and quantity of cargo delivered to the recipient of such Shipment at the destination specified by the Customer through the PIZANA Platform, and Operator shall cause such receipt to be signed by the recipient of said cargo unless otherwise directed by the Customer. No terms, conditions, and provisions of the bill of lading, manifest or other form of receipt or contract shall apply to Shipment Assignment(s) provided under this Schedule. Operator’s failure to issue a bill of lading shall not affect its liability hereunder. You shall notify the Customer and PIZANA immediately of any exception made on the bill of lading or delivery receipt. If the Shipment Assignment is compensated on a ‘per load’, ‘per ton’ basis or similar basis, then You will not be eligible to access additional Shipment Assignments on the PIZANA Platform until the receipt is uploaded on the PIZANA Platform.

1.8 TAX STATUS AND DOCUMENTATION
You agree to and shall provide PIZANA with U.S. Department of Treasury Internal Revenue Service Request for Taxpayer Identification Number and Certification Form(s) (“Form W-9”). You further acknowledge Your understanding that the failure to submit an accurately completed Form W-9 may result in suspension from the use of the PIZANA Platform and Services, or result in the withholding of payments.

1.9 REPRESENTATIONS ON SAFETY
You also represent and warrant that You and all of your Drivers (as applicable): (i) possess the driving skills necessary to accept and deliver the Shipment Assignments, and (ii) are duly trained and experienced in the safe handling of equipment and motor vehicles, and general safety procedures, guidelines, and protocols that are customary in the construction and/or transportation industries or in your trade. You further represent and warrant that You will follow all commercially reasonable safety precautions, including but not limited to following the express directions and guidance of any Customer or Customer representatives who provide you with direction at or concerning any pickup or delivery locations.

1.10 REPRESENTATIONS AND WARRANTIES REGARDING DRIVERS AND VEHICLES 

1.10.1 OPERATOR AND DRIVER REQUIREMENTS

You represent and warrant that You and all of your Drivers (as applicable) shall: (i) hold and maintain (a) a valid commercial PIZANA’s license with the appropriate level of certification to operate the vehicle used to fulfill Shipment Assignments, and (b) all other licenses, permits, approvals, and related authorizations that may be applicable and necessary to perform the delivery of Shipment Assignments; (ii) possess the appropriate level of training, expertise, and experience to perform the delivery of Shipment Assignments in a professional and workmanlike manner with due skill, care, and diligence typically required of a professional vehicle operator, including maintenance of all training certificates and qualifications; and (iii) maintain high standards of professionalism, PIZANA safety, service and courtesy.

You further acknowledge and agree that You and your Drivers may be subject to background and driving record checks from time to time in order to qualify to fulfil, and remain eligible to fulfil, Shipment Assignments. PIZANA reserves the right, at any time in PIZANA’s sole discretion, to deactivate or otherwise restrict You or your Drivers from accessing or using the Services if You or your Driver(s) fail to meet the requirements set forth in this Schedule.

1.10.2 EQUIPMENT REQUIREMENTS
You represent and warrant that that any vehicles You or your Drivers use to fulfill Shipment Assignments shall at all times be: (i) properly registered and licensed to operate in order to fulfill Shipment Assignments; (ii) owned or leased by You, or otherwise in your lawful possession or control; (iii) suitable for fulfilling the Shipment Assignments contemplated by this Schedule; and (iv) maintained in good operating condition, consistent with all industry safety and maintenance standards for a vehicle of its kind and any additional standards or requirements that may be applicable to any accepted Shipment Assignment(s). You also represent and warrant that You and Your Drivers shall at all times comply with Applicable Law regarding vehicle safety, operating speeds, vehicle dimensions, weights and operating loads.

1.10.3 EQUIPMENT IDENTIFICATION
In order to fully integrate with PIZANA Platform or Service, a System Vehicle Identification Number (“SVIN”) will be issued to each vehicle owned, operated, and controlled by You. It is your responsibility to know and supply the assigned SVIN upon request. You may create a physical SVIN plate that can be displayed or be visible to others, however, in no event should the You display the SVIN where it may interfere with the safe operation of the vehicle.

2. OPERATING IN CALIFORNIA
If You are operating in the State of California, then You further represent and warrant that you are:

2.1.1 FORMAL BUSINESS ENTITY
A formal business entity operating and registered under the laws of the state of California. You will provide documentation of your business status by submitting to PIZANA a United States Department of Treasury Internal Revenue Service Request for Taxpayer Identification Number and Certification Form (the “Form W-9”) showing your California registration status.

2.1.2 FREE AGENT
Free from direction and control of PIZANA or Customers with respect to the performance of services hereunder. 

2.1.3 PRIMARY TRADE
Customarily engaged with customers to fulfil Shipment Assignments that are the same or similar to Shipment Assignments and, upon request, You can demonstrate that you promoted your business as one that fulfills shipping and transportation services. 

2.1.4 NON-EXCLUSIVE
Not in an exclusive relationship (in name or in practice) with any single customer and You are free to fulfill Shipment Assignments with other customers not using the PIZANA Platform and further that You intend to fulfill Shipment Assignments with multiple Customers on the PIZANA Platform. 

2.1.5 REGISTERED ENTITY
Registered with the United States Department of Transportation or have obtained any necessary motor carrier authority necessary under Applicable Law. 

2.1.6 CREDENTIALED ENTITY
Credentialed with and shall maintain at all times any applicable and/or necessary licenses, permits, and/or tax registrations required by Applicable Law necessary for You to conduct business in the state of California. 

2.1.7 INDEPENDENT BUSINESS LOCATION
Located at and maintain and operate out of the primary business location identified in the PIZANA Platform during the sign-up process. 

2.1.8 SELF EQUIPPED
Able to provide your own tools, vehicles, and equipment necessary to provide the services to third parties as described hereunder. 

2.1.9 EXCEPTION
Not performing the type of work for which a contractors’ license is required by the California State License Board, pursuant to Chapter 9 (commencing with Section 7000) of Division 3 of the California Business and Professional Code.

</Typography>



<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            3. OPERATOR AS A NON-ASSET BROKER
</Typography>

<Typography className="text-16" color="black">
If You are a Non-Asset Broker, which for the purposes of this Schedule means You are an operating entity that does not own any equipment or vehicles, but subcontracts hauling and transport work to other Operators, then Non-Asset Broker shall be solely and fully responsible to ensure that all subcontracted operators comply with the terms and conditions of this Agreement and this Schedule as if each of said subcontractor was an Operator. Without limiting the foregoing, the Non-Asset Broker shall ensure that all subcontracted Operators are registered appropriately as an Operator with PIZANA and on the PIZANA Platform.

As a Non-Asset Broker, You expressly understand and agree that all liability and insurance requirements shall be the responsibility of your subcontracted Operator. Failure of a subcontracted Operator to fully register and comply to the terms of this Schedule (including maintenance of proper insurance coverages where PIZANA is listed as an additional insured) may result in claims being made directly against You, the Non-Asset Broker.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            4. GENERAL SUBCONTRACT PROHIBITION
</Typography>
<Typography className="text-16" color="black">
Unless You are a Broker and You have identified yourself as such on the PIZANA Marketplace, You specifically represent, warrant and agree that all Shipment Assignments tendered to You by PIZANA shall be transported on equipment or vehicles operated by You or under Your direct control or authority, and that You shall not in any manner sub-contract, broker, or in any other form arrange for any Shipment Assignments to be transported by a third-party without the prior consent of PIZANA. In the event of any breach of this provision, You shall remain directly liable to PIZANA, as if You transported such Shipment Assignment under your own control or authority. You further expressly agree to indemnify, defend and hold PIZANA harmless from any and all loss, liability, damage, claim, fine, cost or expense, including reasonable attorney’s fees, arising out of or in any way related to the use of any subcontractor in violation of this provision regardless of whether any claims arise from Your conduct, actions, or omissions or those of any subcontractor, or any other third party.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            5. GENERAL DISCLAIMER OF APPLICABILITY OF THIS SCHEDULE TO CERTAIN TRANSACTIONS
</Typography>

<Typography className="text-16" color="black">
If You are an Operator that is operating vehicles for a Customer, using Customer’s Company Owned Vehicle or a Company Contracted Vehicle, then this Schedule C does NOT apply to You. Instead, the terms of Schedule D apply.

Irrespective of whether You have the ability to accept work from PIZANA Marketplace or not, where Shipment Assignments are offered direct from a Customer (as opposed to from the PIZANA Marketplace), then this Schedule C shall not apply.

</Typography>

<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            6. PIZANA’S OBLIGATIONS PIZANA PLATFORM AND SERVICE
</Typography>

<Typography className="text-16" color="black">
PIZANA’s sole responsibility to You under this Schedule is to provide the PIZANA Platform and Services, and to use commercially reasonable efforts to provide support of the PIZANA Platform during PIZANA’s normal operating hours.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            6.1 PIZANA IS NOT RESPONSIBLE FOR CUSTOMER’S POSTED SHIPMENT ASSIGNMENTS
</Typography>

<Typography className="text-16" color="black">
You understand and acknowledge that Customer, and not PIZANA, is responsible for the content, completeness and accuracy of the Shipment Assignments. In particular, Customer (and not PIZANA) is solely responsible for: (i) creating accurate and complete Shipment Assignments; (ii) ensuring that the cargo that is the subject of the Shipment Assignment(s) is properly tendered to the Operator that has accepted the relevant Shipment Assignment; and (iii) providing all commercially reasonable instructions related to each Shipment Assignment to the Operators that accept such Shipment Assignments.

Any claims or disputes between Customer and Operators should be taken up between Customer and Operator. However, upon request, PIZANA shall endeavor to assist in any dispute by providing any information it has in its possession to You. Such requests should be directed to PIZANA support at support@PIZANA ONLINE. .com.

6.1 APPOINTMENT OF PIZANA AS PAYMENT AGENT
You hereby appoint PIZANA as your representative for the sole purpose of invoicing Customers on your behalf for completed Shipment Assignments that You undertake in this Schedule. Furthermore, You acknowledge and expressly agree that PIZANA provides a service where it handles the task of receiving payments from Customer(s) and disbursing Shipment Costs to Operators.
</Typography>

</div>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            7. RULES OF ENGAGEMENT
</Typography>

<Typography className="text-16" color="black">
7.1 THE OFFER PROCESS

Customer’s posting of a Shipment Assignment constitutes Customer’s express offer of a Shipment Assignment to qualified Operators on the PIZANA Marketplace. Customer is solely responsible for providing accurate and complete information about the Shipment Assignment, including but not limited to the pickup and delivery locations, delivery instructions, truck type, cargo information, and the offered Rate. Customer may withdraw its offer of a Shipment Assignment at any time.

7.2 THE ACCEPTANCE PROCESS
The act of acceptance of an offer to undertake a Shipment Assignment is done by the Operator pressing the ‘ACCEPT’ button or otherwise indicating acceptance as directed on the page or application through which the Operator is reviewing the proposed Shipment Assignment. Once an Operator accepts a Shipment Assignment, the Customer and Operator are deemed to have entered a binding digital contract to fulfill the Shipment Assignment based on the information provided in the Shipment Assignment, and pursuant to the terms and conditions of Schedule B of the Agreement (as applied to the Customer) and this Schedule C (as applied to the Operator).

7.3 CANCELLING ACCEPTED SHIPMENT ASSIGNMENT
You may reasonably cancel an accepted Shipment Assignment prior to the commencement of the Shipment Assignment, and You may also end an accepted Shipment Assignment during fulfillment. Cancelations and/or failure to perform services will result in non-payment of any fees due to Operator for the Shipment Assignment. Furthermore, unreasonable cancellation of a Shipment Assignment, failure to timely notify a Customer of a cancellation, or the frequent cancellation or cessation of accepted Shipment Assignments may result in your suspension and, depending on the circumstances, possible claims of damages against You. It is the Operator’s responsibility to communicate to Customer any cancellations or delays in any accepted Shipment Assignments, including but not limited to all cancellations that occur within two hours of the Shipment Assignment commencement time.

7.4 RATE AND BILLABLE AMOUNTS; RATE CALCULATIONS 

7.4.1 RATE CALCULATIONS - GENERAL

The Rate presented to Operator in the Shipment Assignment, is the amount per unit that the Operator shall be compensated. A unit may be calculated, but not limited to: (i) per load; (ii) per shift; (iii) per ton, or (iv) per hour. The amount payable to You for an accepted and completed Shipment Assignment shall be calculated by the PIZANA Platform. For the purposes of disclosure, PIZANA receives a payment from the Customer for each Shipment Assignment completed by Operator for use of the PIZANA Platform and its related services.

7.4.2 PREVAILING WAGE RATES AND CERTIFIED PAYROLL
Shipment Assignments posted on the PIZANA Marketplace may be governed by Applicable Law, including but not limited to laws and regulations addressing “Prevailing Wage Rates.” It is Operator’s responsibility to determine if the Rate presented is in accordance with what You may otherwise be entitled to receive under Prevailing Wage Rates. Operator may be required to provide Certified Payroll documentation if mandated by Applicable Law.

7.5 SELECTING SHIPMENT ASSIGNMENTS
The Service consists of a listing of Shipment Assignments offered by many Customers. Each Operator, in its sole discretion, shall select Shipment Assignments that best meet its own financial and resource management objectives, operating hours, and logistical convenience. Customers are entitled to and may adjust the Rate(s) offered for Shipment Assignments based on the lack of prevailing interest by Operators.

7.6 DISPUTES, ADDITIONAL AMOUNTS, AND ADJUSTMENTS
If Customer or Operator believe that additional amounts are owed, or an adjustment to a previously agreed Rate is warranted, then the Customer and Operator are free to negotiate such changes or adjustments. Any disputed amounts should be notified to the other party immediately upon discovery. Customer and Operator should notify PIZANA of any disputes or adjustments by contacting PIZANA support at support@PIZANA ONLINE. .com.

7.7 INFORMATION DISCLOSURE AND USE; ADVERTISING AND PROMOTION

7.7.1 CONSENT TO DISCLOSURE OF INFORMATION AND AGREEMENT TO LIMIT THE USE OF INFORMATION RECEIVED

You acknowledge and agree that your acceptance of a Shipment Assignment will result in the disclosure of your information to Customer. Furthermore, the Service will disclose to Operator additional Customer information, including the Customer’s name and worksite location, as well as details about the recipient of any cargo to be transported. You acknowledge and agree that such information will be considered the Confidential Information of Customer and that You will treat all such information disclosed to you in confidence and use that information only to fulfill the Shipment Assignment(s) You accept and for no other purpose.

7.7.2 ADVERTISING AND PROMOTION
You expressly acknowledge and agree to allow PIZANA to promote or advertise You and your business (as applicable) as an Operator available on the PIZANA Marketplace to provide transport services as described herein.

</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            8. SERVICES, RATES AND PAYMENTS
 
</Typography>

<Typography className="text-16" color="black">
8.1 SHIPMENT COST AS AMOUNTS PAYABLE AND HISTORY
For work completed from Sunday to Saturday representing day 1 to day 7, payment will be made to Operator on the following Friday being day 13 or on Tuesday being day 17 for Shipment Assignments completed on the PIZANA Marketplace. In the event of a federally recognized holiday that impacts banking transactions, then an additional business day shall be added. An Operator that fails to provide banking information for direct deposit may result in a check being posted using United States Postal Services, resulting in additional days for delivery.

The Service will enable the generation of an invoice on the Operator’s behalf for payment collection from the Customer. Each Shipment from the PIZANA Marketplace completed shall be available on the PIZANA Platform and may be accessed via the ‘Job History’ section of the PIZANA Platform. It is the responsibility of the Operator to review completed Shipment Assignments in the Job History to ensure accuracy prior to an invoice being generated on the Operator’s behalf to the Customer. Operator must raise a dispute with Customer through the PIZANA Platform by contacting PIZANA Support at support@PIZANA ONLINE. .com.

8.2 REMITTANCE REPORTS
Operator shall be provided a Remittance Report upon request. A Remittance Report shall provide all the amounts payable to You for Shipment Assignments completed on the PIZANA Marketplace. Questions related to Remittance Reports should be directed to PIZANA Support at support@PIZANA ONLINE. .com.

8.3 RIGHT TO WITHHOLD PAY
PIZANA shall be permitted to withhold any amounts payable to You, should Operator have any outstanding claims from Customer related to a Shipment Assignment, where Operator may not have submitted mandatory forms related to Certified Payroll, where the Customer has issued a lien or other claim against the Operator and instructed PIZANA not to pay Operator, or where Operator may not have submitted the required tax forms. PIZANA shall endeavor to inform Operator of any amounts withheld and their reasons. PIZANA shall release payment as soon as practicable once any issues are resolved.

8.4 PAYMENT METHOD
PIZANA shall pay Operator either through direct payment to the Operator’s bank account or via a bank issued check. Unless otherwise agreed in writing, no other form of payment will be available to Operator from PIZANA. Should Operator fail to submit bank account details to PIZANA in a timely manner, then a bank issued check will be issued to the Operator and sent via United States Postal Service to Operator’s contact address on the PIZANA Platform. 
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            9. GRIEVANCES AND DISPUTES
 
</Typography>

<Typography className="text-16" color="black">
9.1 GRIEVANCES AND DISPUTES

Any disputes between Customer and any Operator shall be between those parties. However, in the event that either Customer or Operator do not appropriately respond to any dispute raised, either party may contact PIZANA Support at support@PIZANA ONLINE. .com and report the issue. PIZANA shall take reasonable steps to facilitate discussions between parties.

9.2 INTERSTATE SERVICES
When providing interstate services, You shall observe the time period for issuing additional amounts or claims for undercharges set forth in 49 USC § 13710. Assuming You have complied with the foregoing invoicing obligation, You shall bring suit related to unpaid freight charges or undercharges within 18 months of the date of delivery or your right to sue or otherwise seek payment shall be waived.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            10. ADDITIONAL INDEMNIFICATION, LIABILITY, INSURANCE
 
</Typography>

<Typography className="text-16" color="black">
10.1 ADDITIONAL INDEMNIFICATION

You agree to defend, indemnify, and hold PIZANA and the Customer harmless from an against all loss, liability, damage, claim, fine, cost or expense, including reasonable attorney’s fee, arising out of or in any way related to the performance or breach of this Schedule by Operator, its employees or independent contractors working for Operator (collectively, the “Claims”), including but not limited to, Claims for or related to personal injury (including death), property damage and Operator’s possession, use, maintenance, custody, or operation of its equipment and vehicles. You hereby expressly waive any and all protections under Applicable Law, including those related to the exclusive workers’ compensation remedy, as necessary to effectuate the terms of this provision.

10.2 FREIGHT LOSS AND DAMAGE

10.2.1 RESPONSIBILITY ON CARGO

Unless otherwise agreed, Operator shall be solely responsible for the care, custody, and control of the cargo tendered under all Shipment Assignments. Operator accepts hereunder from the time said cargo is tendered to Operator for transportation until delivery to the recipient accompanied by the appropriate receipts. Operator shall notify Customer and then PIZANA immediately in the event any cargo is lost, stolen, damaged or destroyed, or in the event Operator becomes aware that applicable delivery schedule will not be met.

10.2.2 LIABILITY
Operator assumes the liability of a motor carrier under the Carmack Amendment as currently codified at 49 U.S.C. § 14706 for loss, delay, damage to the destruction of any and all goods and property tendered to Operator pursuant to this Schedule C from time the Shipment is tendered to Operator until delivery to the recipient accompanied by the appropriate receipts.

10.2.3 WAIVER OF LIEN
Operator shall not withhold any cargo transported under this Agreement on account of any dispute as to Rates or any alleged failure of Customer or PIZANA to pay charges incurred under this Agreement. Operator is relying upon the general credit of PIZANA and hereby waives and releases all liens which Operator might otherwise have to any goods of PIZANA or Customers in the possession or control of Operator.

10.3 OPERATOR INSURANCE

10.3.1 MAINTAINING INSURANCE

You, the Operator, agree to ensure that both PIZANA and Customer are provided coverage as additional insureds on all your liability policies, including without limitation automobile and general liability policies using the term, “PIZANA, Inc. as an additional insured” or equivalent language. Operator understands, acknowledges and agrees that PIZANA as an additional insured means that PIZANA and the Customer using the services are also listed as an additional insured. Operator’s insurance shall be primary to any other insurance available to PIZANA and Customer, and any other insurance shall be noncontributory until Operator’s insurance is exhausted. PIZANA may require proof thereof before you may use PIZANA Services or any time thereafter. Operator guarantees and must provide proof of the insurer’s obligation to notify PIZANA at least ten (10) days before insurance cancellation. Upon receipt of such notice or upon expiration of a currently filed policy with no updated policy on file, you will no longer by permitted to use or access the PIZANA Platform or fulfill Shipment Assignments. It is the responsibility of the Operator to submit its certificate of insurance to PIZANA in a timely manner to prevent any suspension of access or functions on the PIZANA Platform. Operator acknowledges and agrees that PIZANA may release Operator’s contact information and Certificate of Insurance to a Customer upon such Customer’s reasonable request.

10.3.2 INSURANCE COVERAGE FOR OPERATORS
To participate on the PIZANA Platform, You must maintain a minimum insurance coverage of $1 million per occurrence in automobile coverages and you must expressly name PIZANA as an additional insured (or include equivalent language) on a certificate. You expressly agree to provide PIZANA a copy of your insurance policy, including all policy declarations, proof of insurance identification card and proof of premium payment for the insurance policy required in this Section upon request. Furthermore, Operator must provide PIZANA with written notice of cancellation of any insurance policy required by PIZANA. You must submit or cause Your insurance provider or broker to submit a Certificate of Insurance to PIZANA at insurance@PIZANA ONLINE. .com. 

10.3.3 INSURANCE COVERAGE FOR NON-ASSET BROKERS
If You are a Non-Asset Broker as defined under this Schedule, then PIZANA will waive the coverage minimums set out in Section 10.3.2 if You provide PIZANA with documentation showing that (i) your subcontracted Operators are registered on the PIZANA Platform and that they have adequate insurance coverages that comply with the terms of Section 10.3.2; and (ii) said subcontracted Operators have named PIZANA as an additional insured on their insurance policy[ies]. Even if PIZANA waives its insurance provisions for You on this subsection, You hereby agree that You, the Non-Asset Broker, shall be liable for the activities of any claims arising out of the acts or omissions of your subcontracted Operators and Drivers as if You were the owner of the vehicle that is subject to any claim. For the avoidance of doubt, a Broker must maintain at a minimum general liability insurance coverage of $1 million per occurrence. The foregoing waiver for non-asset brokers is only as to automobile insurance coverage.
</Typography>


<div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-Regular"> 
            SCHEDULE D:
PIZANA PLATFORM - DRIVE PRIVATE CARRIAGE
 
</Typography>
<Typography className="text-16" color="black">
This schedule D (the “Schedule”) sets forth the additional terms and conditions that apply when a User in the Role of a Driver of a Company Owned Vehicle, Company Contracted Operator, or a Company Contracted Vehicle (“You” or collectively, for purposes of this Schedule, “Contracted Driver”) accepts Shipment Assignments under this Agreement using the PIZANA Platform. 

1. PIZANA LIMITED OBLIGATIONS TO YOU
You agree and acknowledge that your use of the PIZANA Platform is for convenience only. PIZANA has no obligation to confirm the rights and obligations as between You and any other User on the Platform with whom You are doing business. Among other things, PIZANA shall have no obligation to provide any maintenance records or other documentation to You or on your behalf to any other User. Furthermore, all fees and payments agreed between You and any other User shall be the obligation and responsibility of said other User. PIZANA shall not be responsible for payments or documentation of transactions between Contracted Drivers and other Users. 

 2. CONTRACTED DRIVER REPRESENTATIONS AND WARRANTIES

As with all Operators using the PIZANA Platform and Services, Contracted Drivers expressly agree at all times to obey Applicable Law related to the safe handling of vehicles. Without limiting the foregoing, You expressly agree never to operate any PIZANA applications, or access the PIZANA Platform while operating a motor vehicle. TO THE EXTENT PERMITTED UNDER APPLICABLE LAW, CONTRACTED DRIVERS EXPRESSLY RELEASE AND WAIVE ALL CLAIMS AGAINST PIZANA ARISING OUT OF OR RELATING TO CONTRACTED DRIVER’S UNSAFE OPERATION OF A MOTOR VEHICLE.

Should You have any questions or concerns, Contracted Driver(s) should contact Users with whom they are doing business.

<br></br>
<br></br>
           
</Typography>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
       


    </Root>
  )}

  else{return(<Error404Page/>)}
}

export default TermsView
