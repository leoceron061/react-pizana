import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import {useHistory, useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import Error404Page from '../404/Error404Page'


import store from '../ID_store/store'


const Root = styled('div')(({ theme }) => ({
  '& .PricingStyle3Page-header': {
    backgroundColor:"000000",
  },
  '& .PricingStyle3Page-price': {
    backgroundColor:"#edca33",
  },
}));


function PrivacyView() {
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
  {history.push(`/privacy/${e.target.id}`)}
  else{console.log("This is not working at the moment")}
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
              <Typography color="#edca33" className="font-Regular text-80 md:text-52">
              PIZANA PLATFORM PRIVACY POLICY
              <h1>Effective Date: June 30, 2021</h1>
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
          Introduction
           
                       </Typography>
            
                       <Typography className="text-16" color="black">
                       PIZANA, Inc. (“PIZANA”, “we”, “us”), provides a service that connects third-party equipment operators (“Operators”) to entities arranging for transportation of materials (“Customers”), which we provide and promote through our websites at pizanalawfirm.com (collectively, the “Sites” or “Site”) and associated mobile applications, such as the “PIZANA”, branded mobile applications (collectively, the “Mobile Apps”)(we refer to the Sites, Mobile Applications, and services provided therein as our “Services”). This privacy policy (this “Policy”) describes how we collect, use, and disclose the information we collect about you (“Users”, “you” or “you”) when interacting with our Services. This Policy is applicable to all information about Users or the Operations or Customers a User represents collected through their use of our Services.


                         </Typography>

                         <Typography className="text-16" color="black">
                         In addition, if you are a California resident, California law may provide you with additional rights regarding our use of your personal information. To learn more about your California privacy rights, visit PIZANA’s California Privacy Notice.
                         </Typography>


                         <Typography className="text-16" color="black">

                         Please read this entire Policy carefully before using our Services or providing us with any information. By accessing or using our Services, you consent to the collection, use and disclosure of your information in accordance with this Policy. By providing personal information to PIZANA, all Users fully understand and consent to the collection, use and processing of such information by PIZANA or third parties as set forth herein. IF YOU DO NOT AGREE TO THE TERMS OF THIS POLICY, YOU ARE NOT AUTHORIZED TO USE OUR SERVICES AND MUST DISCONTINUE ANY USE OF SUCH.

                         </Typography>
                        <br></br>
                         <Typography variant="h4" className="pb-32 font-Regular">
                  
1.     WHAT INFORMATION WE COLLECT

           
                       </Typography>

                       <Typography className="text-16" color="black">

                       Personally Identifiable Information You Provide

                       <br></br>
                       <br></br>
In general, we collect this personally identifiable information when you, at any point, manually enter it into any online form available on through our Services or voluntarily submit it to us in another manner. Personally identifiable information may include, but is not limited to, your name, mailing or billing address, telephone number, email address, professional credentials, credit card or other payment method information, or any other information which might reasonably be used to identify you individually. When other information is directly associated with personally identifiable information, this other information becomes personally identifiable information for purposes of this Policy. PIZANA collects personally identifiable information from our Users at several different points on our Services, including, without limitation, when Users provide it to us by:


             
                       </Typography>      

                       <Typography className="text-16" color="black">

                       ·   Registering a PIZANA User Account. To create an account on our Sites or Mobile Apps, we may require you to provide us with your name, business name, address, email address, professional credentials and/or mobile number, and agree to our Terms and Conditions and this Policy. You may provide additional information during the registration flow (for example: your postal code, job title and company) to help you build your profile and to provide you more customized Services (for example: language-specific profile pages, updates, content, more relevant ads and career opportunities). In some cases, we may ask you to submit a visually scanned or photographed image of your identification card, PIZANA’s license, passport, or other legal document to authenticate your identity or credentials. This image may include your photograph and other information from the imaged document, such as your eye color, weight, height, and organ donor status. You understand that, by creating an account, we and others will be able to identify you by your PIZANA profile. We may also ask for your credit card details if you purchase certain additional Services.
                       </Typography>  

                       <Typography className="text-16" color="black">
                          
·       Contacting PIZANA. When you contact our customer support team, we may have to access your contributions to our Services and collect the information we need to categorize your question, respond to it, and, if applicable, investigate any breach of our Terms and Conditions or this Policy. We also use this information to track potential problems and trends and customize our support responses to better serve you.

                       </Typography>  

                       <Typography className="text-16" color="black">
                      
·       Information Collected Through Your Use of our Services. Many communications that you initiate through our Services (for example: an invitation sent to a non-User) will list your name and primary email address in the header of the message. Messages you initiate may also provide the recipient with aggregate information about your network (for example: how many people are in your network). Other communications that you initiate through PIZANA, like a request for an introduction, will list your name as the initiator but will not include your personal email address contact information. Once you have connected with an individual, regardless of who sent the invitation, your contact information will be shared with that individual. You allow us to receive information when you use your account to log in to a third-party web site or application. You also allow us to receive information about your visits and interaction with the sites and services of our partners that include our cookies and similar technologies, unless you opt out. You allow us to receive information when you send payment or receive refunds through our third-party payment processors for certain Services. Any information that you upload or sync with our Services is covered by the Terms and Conditions and this Policy.


                       </Typography>  

                       <Typography className="text-16" color="black">
                       ·       Participating in PIZANA’s Surveys & Contests. From time to time, we may request personally identifiable information from Users via surveys or contests. Participation in these surveys or contests is completely voluntary, and the User therefore has a choice whether or not to disclose personally identifiable information. The requested information typically includes contact information (such as name and shipping address), and demographic information (such as zip code). Contact information will be shared with the contest or survey sponsors to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the use and satisfaction of PIZANA. Though we may use an intermediary to conduct these surveys or contests, these intermediaries will not use the Users’ personally identifiable information for any secondary purposes.

                       </Typography>  


                       <Typography className="text-16" color="black">


                       Your submission of personally identifiable information to us is completely voluntary. However, if you do not provide us with your personally identifiable information, you should understand that you will not be able to use certain functionalities of the Services or features available through our Services that require you to enter your personally identifiable information.

                      
                       </Typography>  

                       <Typography className="text-16" color="black">

                       Payment Information  <br></br>

                       

When you pay for our Services, we use Stripe to process payments you have authorized to complete your purchase of Services. Stripe’s privacy policy will apply to the information you provide on the Stripe site. PIZANA does not, itself, process or store your credit card or bank account information. You must be 18 or older to purchase our Services.

                       </Typography> 

                         <Typography className="text-16" color="black">
                         Personally Identifiable Information We Collect from Third Parties<br></br>


                         Depending on whether you are a Customer, Operator, or a visitor to one of our Sites, we may also collect personal information about you from third parties including our business partners, data providers, identity verification services, credit bureaus (if applicable) and credit card companies.
                         </Typography> 

                         <Typography className="text-16" color="black">

                         Non-Personally Identifiable Information<br></br>

                         
If you do not input or otherwise submit any of your personally identifiable information, then the information we collect from you is limited, and may include:


                         </Typography> 

                         <Typography className="text-16" color="black">
                         ·  IP Address Information. We log your Internet protocol (“IP”) address in order to help us diagnose problems with our server, administer PIZANA and track usage statistics. Your IP address may vary each time you visit, or it may be the same, depending on whether you access PIZANA through an always-on type of Internet connection (such as cable or DSL), or through a dial-up connection. We match IP addresses to completed User registration forms for validation and error checking purposes. If you reached the Site by clicking on a link or ad from another site, then we may also log that information. This helps us maximize our Internet exposure and to understand the interests of our Users. In general, this information is used to generate overall anonymous reports on our Users that enable us to improve the effectiveness of PIZANA. Where permitted by applicable law, we may also use anonymous, de-identified, or aggregate information that does not reasonably identify you for any purpose.
                         </Typography> 



                         <Typography className="text-16" color="black">
                         Log Files, IP Addresses, and Information About Your Computer and Mobile Device. When you visit or leave our Services by clicking a hyperlink or when you view a third-party site that includes our plugin or cookies (or similar technology), we automatically receive the URL of the site from which you came or the one to which you are directed. Also, advertisers receive the URL of the page that you are on when you click an ad on or through our Services. We also receive the IP address of your computer or the proxy server that you use to access the Internet, your computer operating system details, your type of web browser, your mobile device (including your mobile device identifier provided by your mobile device operating system), your mobile operating system (if you are accessing PIZANA using a mobile device), your device specifications, and the name of your Internet service provider or your mobile carrier. We may also receive geolocation data passed to us from third-party services or GPS-enabled devices that you have set up, which we use to show your local information on our mobile applications and for fraud prevention and security purposes. Most mobile devices allow you to prevent real time location data being sent to us, and of course we will honor your settings. Track how you use our Services.

                         </Typography> 

                         <Typography className="text-16" color="black">

                         ·   Geo-location. If you are using PIZANA as an equipment operator who is a third-party service provider, your geo-location information may be collected when you actively using PIZANA in the process of transporting materials to another User (a “Shipment”). This information will be used by PIZANA and may be shared with the recipient of the Shipment in order to provide accurate tracking of the order and delivery status of the Shipment and for full functionality of PIZANA.

                         </Typography> 


                         <Typography variant="h4" className="pb-32 font-Regular">
                           
                           
2. COOKIE POLICY

                         </Typography> 

                         <Typography className="text-16" color="black">



We often place a small file known as a “cookie” on your computer’s hard drive. A cookie is a text file that is placed on your computer’s hard drive. Cookies help us personalize and make improvements to our Site so that you can have a pleasant and productive experience, or to allow us to track your activities while using our Site. A cookie may contain information that allows us to track your path through PIZANA and to determine whether you have visited us before. However, unless you provide us with personally identifiable information, the cookies will not contain any information that would allow us to personally identify you. If you do provide personally identifiable information to us, the cookie is tied to this information so that our systems will recognize you each time you use PIZANA. In that way, we can save your preferences from visit to visit and present you with a customized version of PIZANA, without requiring you to log into PIZANA every time you visit.<br></br>

Some of the most common cookies, along with their primary purposes, that used on our Site are listed here.<br></br>


You may refuse to accept a cookie from us by following the procedures for rejecting cookies specific to your web browser. You can also set your browser to send a warning message before accepting cookies or to refuse cookies. Check your browser for instructions on how to handle cookies. If you choose to decline cookies, you may not be able to use all of the features of PIZANA.<br></br>


·       
In addition, you can exercise advertising cookie choices by visiting 
 Loadz.co
<br></br>



                         </Typography> 



                         <Typography variant="h4" className="pb-32 font-Regular">
                           
3.     OTHER TRACKING TECHNOLOGIES


                         </Typography> 

                         <Typography className="text-16" color="black">

                         User Activity Tracking<br></br>

                         
We employ software technology that enables us to track certain aspects of a User’s visit to PIZANA. This technology helps us better manage content on PIZANA by informing us what content is effective. The software uses two methods to track User activity: 1) “trackers” and 2) “clear gifs.” Trackers are pieces of executable code that are embedded in a website that track usage activity including which pages are viewed, when they are viewed, and how long the pages are viewed. Clear gifs are tiny graphics with unique identifiers which are embedded in websites and emails that track whether or not a User has viewed a particular page or email. User activity information may be associated with additional information about a User’s session, such as IP Address and the type of browser used, and personally identifiable information, if provided by the User.
  
                         </Typography> 

                         <Typography className="text-16" color="black">

                        
If you arrive at the Site by “clicking through” from another web site, and you have registered with that other web site, then certain information about you that you provided to that other web site, such as the terms you were searching on that led you to the Site, may be transmitted to us and we may use it as described in this Policy. You should review the privacy policy of any web site from which you reached the Site in order to determine what information was collected by that web site and for what purpose(s) you agreed that web site could use that information. We may or may not retain that information; if we do, then we may use it in accordance with this Policy. This information may or may not be associated with other User activity data or personally identifiable information.<br></br>

Advertising Technologies and Web Beacons <br></br>



We may target (and measure the performance of) ads to you both on and off of our Services through a variety of ad networks and ad exchanges, using the following, whether separately or combined:



                         </Typography> 



                         <Typography className="text-16" color="black">

                          
Advertising technologies on and off of our Services, like web beacons, pixels, ad tags, cookies, and mobile identifiers as permitted by mobile platforms.
User-provided profile and contact information and categories (for example: “product managers in Texas”).
Your use of our Services (for example: your search history, which pages you visit, you’re clicking on a PIZANA ad, etc.) and log files generated as described in the Log Files Section.
Information from 3rd parties (for example: advertising partners, publishers and data aggregators) which we use in addition to the information from our cookies (and similar technologies), your profile and use of our Services.


                         </Typography> 
                         <Typography variant="h4" className="pb-32 font-Regular">
                         4.     “DO NOT TRACK” SIGNALS

                         </Typography>



                         <Typography className="text-16" color="black">

                         Some web browsers may give you the ability to enable a “do not track” setting that sends a special signal to the websites you encounter while web browsing. Our Sites do not respond to web browser “do not track signals” at this time.



                         </Typography> 


                         <Typography variant="h4" className="pb-32 font-Regular">

                        
5.     HOW WE USE THE INFORMATION WE COLLECT

                    
                         </Typography>



                         <Typography className="text-16" color="black">
                         In general, unless restricted by applicable law, we may use the information (whether or not personally identifiable) that you provide to us to, among other things:<br></br>

                         
To provide you with the Services you requested. Including creating a PIZANA User Account (which may include our collection of background check and identity verification information), process or complete transactions requested by you, and contact you regarding administrative issues, questions about your specific request, respond to your comments or requests, to provide the services you request, and to manage your account.
Customize User experience of others on our Services. For example, when you sign into your account, we may display the names and photos of new Users who have recently joined your network or recent updates from your connections and companies you follow. We try to show you content, such as news and presentations that are relevant to you, your industry, or your profession.
Marketing and advertising purposes. We also may use your information and content for invitations and communications promoting our Services as well as promotions, offers of products and services and other content which we think will be of interest to you, where you have not opted out.
Promote our Services through your testimonials. If you provide any testimonials about our goods or services or place advertisements through the ads, we may post those testimonials and examples of advertisements you place in connection with our promotion of these services to third parties. Testimonials and advertisements may include your name and other personal information that you have provided.
Understand and improve our Services. To conduct research and development for the improvement of our Services in order to provide you and other Users with a better, more intuitive experience and drive membership growth and engagement on our Services and to help connect professionals to economic opportunity.
Safeguard PIZANA’s Rights. Administer and protect the security of our Services and prevent, detect, mitigate, and investigate fraud, security breaches, and potentially prohibited or illegal activities. Enforce this Policy, our Terms and Conditions, and our other policies.
<br></br>
As you otherwise consent to upon our request.
<br></br>

Where permitted by applicable law, we may also use anonymous, de-identified, or aggregate information that does not reasonably identify you for any purpose.


                         </Typography> 


                         <Typography variant="h4" className="pb-32 font-Regular">

                         6.     WHO WE SHARE YOUR INFORMATION WITH

                    
                         </Typography>


                         <Typography className="text-16" color="black">
                        
Maintaining your trust is our top priority. We will only provide your personally identifiable information to third parties: (1) with your consent; (2) where it is necessary to carry out your instructions; (3) as reasonably necessary in order to provide our features and functionality to you; (4) when we reasonably believe it is required by law, subpoena or other legal process; or (5) as necessary to enforce our Terms and Conditions or protect the rights, property, or safety of us, our Users and Site visitors, and the public.
<br></br>


We may share your personally identifiable information with: 

<br></br>


·       To Other Users: The visibility of your professional profile to other Users depends on your degree of connection with the viewing User, the subscriptions they may have, their usage of the Services, access channels and search types (for example: by name or by keyword). You should be aware that any personal information that is voluntarily posted by you to our Services may be viewed and used by other Users.

·       Service Providers: we may share your information with third parties who provide services to us or to whom we outsource certain services, such as website analytics companies, hosting and cloud computing service providers, certificate of insurance processors, payment processors, receivables management providers, and debt collection providers. Our service providers only access, process or store your information in the course of performing their duties to us.

·       For Business Transactions: We may establish subsidiaries or other related companies, merge with or be acquired by another company, or sell substantially all of our assets (including substantially all assets to which other of our agreements relate) to another company. If that happens, we may disclose to them your personally identifiable information, in which case we will request them to abide by this Policy. We may also disclose some personally identifiable information in connection with a corporate merger, consolidation, restructuring, sale of certain of our ownership interests, assets, or both, or other corporate change, including without limitation, during the course of any due diligence process.

·       Affiliates. We may share your personal information with our affiliates (meaning entities controlled by, controlling or under common control with us) as reasonably necessary to provide the Services. We may combine information internally across different Services that we offer.

·       Third-Party Advertisers. We will share information provided by Users (whether or not personally identifiable) with certain third parties so that they can contact you with information about a broad range of services and information to meet your needs (“Third-Party Advertisers”). Third-Party Advertisers may associate personal information collected by the advertiser directly from you with our cookies and similar technologies. Some Service Providers are also Third-Party Advertisers.

·       Law Enforcement. We may disclose any of your personal information if we have a good faith belief that disclosure is permitted by law or is reasonably necessary to: (1) comply with a legal requirement or process, including, but not limited to, civil and criminal subpoenas, court orders or other compulsory disclosures; (2) enforce this Policy or our Terms and Conditions; (3) respond to claims of a violation of the rights of third parties; (5) prevent detect, mitigate, and investigate potentially illegal acts, fraud and/or security breaches and to assess and manage risk ; respond to User service inquiries; or (6) protect the rights, property, or safety of us, our Services, our Users, or the public.


                         </Typography>



                         <Typography variant="h4" className="pb-32 font-Regular">
                         7.     Telemarketing and SMS Information



                         </Typography>

                         <Typography className="text-16" color="black">
                        
By providing your information, you understand and agree that your action constitutes an inquiry and/or application for purposes of telemarketing laws, and notwithstanding that your telephone and/or cell number may be listed with the federal Do-Not-Call Registry you expressly opt-in to: (a) receive an offer or service from one or more of our partners or affiliates; (b) receive future information about products and services from us, our partners, affiliates and other third parties to whom we may provide your information; (c) permit us, our partners, affiliates and other third parties to contact you pursuant to the business relationship we have established using the information you provided to us for any purpose such as contacting you by email address, phone and/or mobile phone number (including use of automated dialing equipment), text (SMS) message or any means of communication for any purpose that, among other things, your wireless device may be capable of receiving (for example: mms, video etc. ). You may revoke authorization for us to contact you by such means at any time by contacting us.

Data obtained from you in connection with any SMS services we provide you may include your name, address, cell phone number, your provider’s name, and the date, time, and content of your messages. The use of this information will be in accordance with the Terms and Conditions and Policy. If fees are charged to your wireless account invoice, PIZANA may provide your carrier with your applicable information in connection therewith. Your wireless carrier and other service providers may also collect data about your wireless device usage, and their practices are governed by their own policies. You acknowledge and agree that the SMS Service is provided via wireless systems which use radios (and other means) to transmit communications over complex networks. We will not be liable for any delays in the receipt of any SMS messages, as delivery is subject to effective transmission from your network operator. SMS message services are provided on an AS IS basis. We are not responsible for incomplete, lost, late, damaged, illegible or misdirected mobile messages or for any technical problems, malfunctions of any telephone lines, computer systems, servers, providers, hardware/software, lost or unavailable network connections or failed, incomplete, garbled or delayed computer transmission or any combination thereof. We are not responsible for any liability for damage to any computer system resulting from participation in or accessing or downloading information in connection with this program. We assume no responsibility for undeliverable mobile messages resulting from any form of active or passive mobile filtering by a user’s mobile provider or for insufficient space in user’s mobile phone account to messages. We reserve the right, in our sole discretion, to cancel or suspend our Services should a virus, bugs, or other causes beyond our control corrupt the administration, security or proper operation of the program. We do not guarantee that your use of the SMS service will be private or secure, and PIZANA are not liable to you for any lack of privacy or security you may experience. You are fully responsible for taking precautions and providing security measures best suited for your situation and intended use of the SMS service.



                         </Typography>

                         <Typography variant="h4" className="pb-32 font-Regular">
                         8.     USING THIRD-PARTY SERVICES AND VISITING THIRD-PARTY SITES

                         </Typography>

                         <Typography className="text-16" color="black">
                        
This Policy applies only to PIZANA’s Services. Our Services may contain links to or otherwise interact with other websites or products not operated or controlled by us, including without limitation any payment processor (the “Third Party Sites”), including third party add-ons, applications and other software that could track your usage or collect personal information. This Privacy Policy does not apply to information collected on or through any such third-party websites and we are not responsible for the privacy practices of others or the content of their websites. The operators of any third-party website have their own privacy policies and you should review those privacy policies to determine their privacy practices. If you decide to access any Third-Party Sites or use services provided by any Third-Party Sites, you do so at your own risk and your disclosure of your personal information on Third Party Sites is governed solely by the applicable Third-Party Site’s policies.

Third parties (for example: your email provider) may give you the option to upload certain information in your contacts stored with us onto their own service. If you choose to share your contacts in this way, you will be granting your third-party provider the right to store, access, disclose and use these contacts in the ways described in such third party’s terms and privacy policy.



                         </Typography>

                         <Typography variant="h4" className="pb-32 font-Regular">
                         9.     YOUR RIGHTS AND CHOICES
                         </Typography>

                         <Typography className="text-16" color="black">
                         You have several choices regarding the use and disclosure of your information.<br></br>


                         Information You Provide. With respect to the collection of your information, if you do not want your information collected, please do not submit it to us. If would like to suspend or deactivate your PIZANA User Account, please contact us. If you choose to terminate your account, we will deactivate it for you but may retain information from your account for a certain period of time and disclose it in a manner consistent with applicable law and our policies and practices.
*Please note: Information you have shared with others or that others have copied may also remain visible after you have closed your account or deleted the information from your own profile. In addition, you may not be able to access, correct, or eliminate any information about you that other Users copied or exported out of our Services because this information may not be in our control.

Marketing Messages.  We may send you marketing communications, about our services that may interest you. You may opt out of receiving non-administrative emails from us simply by responding to the opt-out link provided on all email communications from PIZANA or by emailing support@PIZANA.co with “unsubscribe” in the subject line. We may send you service-related announcements, for example, if our service is temporarily suspended for maintenance, we may 

send you an email. Generally, you may not opt out of these communications, which are not promotional in nature. If you do not wish to receive them, you have the option to deactivate your account by emailing support@PIZANA.com.
Cookies. If you wish to disable cookies, you can set your browser not to accept cookies as described in the section entitled “Cookies.”
Targeted Advertising Choices. Some content, including advertisements, on the Site may be served by third-parties, including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies or other tracking technologies to collect information about you when you use our Site. We do not control these third parties’ tracking technologies or how they may be used. If you have any questions about an advertisement or other targeted content, you should contact the responsible ad provider directly or visit https://www.aboutads.info/choices to see if an opt-out is available.



                         </Typography>

                         <Typography variant="h4" className="pb-32 font-Regular">
                         10.  SECURITY

                         </Typography>

                         <Typography className="text-16" color="black">
                          

We have implemented appropriate security safeguards designed to protect your information in accordance with industry standards. PIZANA takes reasonable measures to secure the personally identifiable information Users provide to us. However, PIZANA cannot guaranty the security of any information you submit to us, and you do so at your own risk. All personally identifiable information is protected by password and accessible only to authorized PIZANA personnel. However, there is a possibility that Internet transmissions containing a User’s personally identifiable information may be intercepted by others. There is no way for us to ensure the privacy of User information before it arrives at PIZANA or after it leaves PIZANA.


                         </Typography>

  <Typography variant="h4" className="pb-32 font-Regular">
  11.  DATA RETENTION

                         </Typography>

                         <Typography className="text-16" color="black">
                          
We retain the personal information you provide while your account is in existence or as needed to provide you services. We may retain your personal information even after you have closed your account if retention is reasonably necessary to comply with our legal obligations, meet regulatory requirements, resolve disputes between Users, prevent fraud and abuse, enforce this Policy and our Terms and Conditions., or as otherwise lawful and reasonably aligned with Users’ reasonable expectations based on their relationship with PIZANA. We may retain personal information, for a limited period of time, if requested by law enforcement. Our Customer Service team may retain information for as long as is necessary to provide support-related reporting and trend analysis only, but we generally delete or de-personalize closed account data consistent with this Policy.



                         </Typography>


                         <Typography variant="h4" className="pb-32 font-Regular">
                         12.  MINIMUM AGE

                         </Typography>

                         <Typography className="text-16" color="black">

                          

As described in the Terms and Conditions, persons must be at least 18 years old to use our Services. You are not permitted to use our Services if you are under the age of 18. By using our Services, you agree to provide us with accurate information concerning your age or identity if we request it. You also agree not to assist children under the age of 18 in accessing our Services or to attempt to contact children under 18 through our Services.

Our Services are not intended for children under the age of 13, and we do not knowingly collect or use personally identifiable information from children under the age of 13. If we discover personal data from a child under the age of 13, we will eliminate that data.

                         </Typography>


                         <Typography variant="h4" className="pb-32 font-Regular">
                      

                         13.  CHANGES TO POLICY

                         </Typography>


                         <Typography className="text-16" color="black">

                        
We reserve the right to modify this Policy at any time, so please review PIZANA frequently for any changes. Amendments to this Policy will be posted on the Site and will be effective when posted. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted, the changes to any amended or revised Policy by your continued access or use of our Services.


                         </Typography>

                         <Typography variant="h4" className="pb-32 font-Regular">

                         14.  CONTACT US
                        
                         </Typography>
                         <Typography className="text-16" color="black">
                         Loadz.co

                         </Typography>

                         
</div>

    </Root>
  )}

  else{return(<Error404Page/>)}
}

export default PrivacyView