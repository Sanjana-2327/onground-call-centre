export const leads = [
 {name:'Madhusudan Rao',company:'The Sleep Company',phone:'+91 98450 21344',score:92,intent:87,value:42500,status:'Hot lead',source:'Store walk-in',last:'12 min ago',signals:[['Financing friction detected','Asked about EMI options; price is the main objection.'],['Repeated product comparison','Compared the Ortho and Luxe ranges twice.'],['Ready to decide','Requested delivery availability for this weekend.']]},
 {name:'Ananya Sharma',company:'Furnishka',phone:'+91 98861 04321',score:88,intent:81,value:31900,status:'Follow-up due',source:'Website enquiry',last:'28 min ago',signals:[['Strong purchase intent','Asked for a final quote and delivery timeline.'],['Family decision pending','Wants to confirm dimensions with a family member.']]},
 {name:'Rohit Menon',company:'Duroflex',phone:'+91 99002 17482',score:84,intent:76,value:27800,status:'Warm lead',source:'Inbound call',last:'46 min ago',signals:[['Product fit established','Interested in a medium-firm mattress.'],['Needs reassurance','Asked about warranty and trial period.']]},
 {name:'Priya Nair',company:'Nestasia',phone:'+91 97311 88340',score:79,intent:72,value:18400,status:'Follow-up due',source:'Store walk-in',last:'1 hr ago',signals:[['Gift purchase','Looking for a housewarming gift this month.'],['Style preference captured','Prefers neutral colours and ceramic finishes.']]},
 {name:'Arjun Verma',company:'The Sleep Company',phone:'+91 98441 61020',score:73,intent:65,value:22600,status:'Warm lead',source:'Campaign',last:'2 hrs ago',signals:[['Needs product comparison','Asked for a side-by-side comparison.']]},
 {name:'Meera Iyer',company:'Furnishka',phone:'+91 99008 77213',score:68,intent:58,value:14200,status:'New',source:'Website enquiry',last:'3 hrs ago',signals:[['Browsing phase','Exploring options before visiting the store.']]},
 {name:'Karan Shah',company:'Duroflex',phone:'+91 99860 20017',score:61,intent:51,value:19800,status:'New',source:'Store walk-in',last:'Yesterday',signals:[['Needs follow-up','Asked to be contacted after 5 PM.']]}
];
const practiceOnlyContacts = [
 {name:'Lakshmi R.',company:'The Sleep Company',phone:'+91 98450 61245',score:82,intent:78,value:28500,status:'Warm lead',source:'Practice contact',signals:[['Mattress enquiry','Asked about comfort and trial options.']]},
 {name:'Ritu S.',company:'Furnishka',phone:'+91 98451 72836',score:76,intent:71,value:31200,status:'Follow-up due',source:'Practice contact',signals:[['Sofa comparison','Comparing fabric options and delivery dates.']]},
 {name:'Mukunda R.',company:'Duroflex',phone:'+91 98452 31647',score:79,intent:74,value:24900,status:'Warm lead',source:'Practice contact',signals:[['Product guidance','Interested in support and warranty details.']]},
 {name:'Kavitha R.',company:'Nestasia',phone:'+91 98453 90418',score:72,intent:66,value:16700,status:'New',source:'Practice contact',signals:[['Home décor enquiry','Looking for tableware for a new home.']]},
 {name:'Priya Iyer',company:'Furnishka',phone:'+91 98454 27139',score:85,intent:80,value:34800,status:'Hot lead',source:'Practice contact',signals:[['Ready to shortlist','Requested a final quote and delivery estimate.']]}
];
export const practiceContacts = [...practiceOnlyContacts, ...leads];
export const calls = [
 {name:'Madhusudan Rao',phone:'+91 98450 21344',company:'The Sleep Company',time:'10:42 AM',duration:'04:18',type:'Missed',value:42500,reason:'Asked about delivery and EMI options.'},
 {name:'Ananya Sharma',phone:'+91 98861 04321',company:'Furnishka',time:'10:18 AM',duration:'06:42',type:'Incoming',value:31900,reason:'Requested a final quote for the sofa set.'},
 {name:'Rohit Menon',phone:'+91 99002 17482',company:'Duroflex',time:'09:54 AM',duration:'03:16',type:'Outgoing',value:27800,reason:'Discussed mattress firmness and warranty.'},
 {name:'Priya Nair',phone:'+91 97311 88340',company:'Nestasia',time:'09:26 AM',duration:'02:51',type:'Missed',value:18400,reason:'Follow-up requested for gift options.'},
 {name:'Arjun Verma',phone:'+91 98441 61020',company:'The Sleep Company',time:'Yesterday',duration:'05:02',type:'Outgoing',value:22600,reason:'Compared two mattress ranges.'},
 {name:'Meera Iyer',phone:'+91 99008 77213',company:'Furnishka',time:'Yesterday',duration:'01:47',type:'Incoming',value:14200,reason:'Asked about store timings.'}
];
export const channels = [
 {id:'avanibot',name:'AvaniBot',desc:'Your AI teammate for daily briefs and lead context',unread:1,topic:'AI assistant · Always on'},
 {id:'store-team',name:'# store-team',desc:'Store team updates',unread:2,topic:'Bengaluru · Store team'},
 {id:'sales-wins',name:'# sales-wins',desc:'Wins and shout-outs',unread:0,topic:'Share the wins'},
 {id:'call-centre',name:'# call-centre',desc:'Daily call-centre coordination',unread:1,topic:'Calls, leads and follow-ups'},
 {id:'announcements',name:'# announcements',desc:'Company announcements',unread:0,topic:'Updates from the team'}
];
export const initialMessages = {
 'avanibot':[{from:'AvaniBot',time:'Now',text:'Hi Sanjana! 👋 I can help you prioritise follow-ups, summarise team updates, and prepare for customer calls. What would you like to work on?'},{from:'AvaniBot',time:'9:00 AM',text:'Daily brief: 12 follow-ups are pending, including 3 high-intent leads. Start with Madhusudan Rao and Ananya Sharma.'}],
 'store-team':[{from:'Sonia K.',time:'10:08 AM',text:'Morning team! The weekend delivery slots are now updated.'},{from:'AvaniBot',time:'10:12 AM',text:'Reminder: follow up with high-intent leads before lunch.'},{from:'You',time:'10:16 AM',text:'Got it — I’ll take the priority leads first.'}],
 'sales-wins':[{from:'Rakesh P.',time:'09:42 AM',text:'Closed a ₹42,000 order after a product comparison call. Great start to the day!'},{from:'AvaniBot',time:'09:45 AM',text:'That is a great example of timely follow-up. Kudos, Rakesh!'}],
 'call-centre':[{from:'Ananya S.',time:'10:21 AM',text:'Can someone confirm the new delivery ETA for Furnishka orders?'},{from:'Sonia K.',time:'10:24 AM',text:'The latest ETA is 3–5 business days. I’ve updated the store sheet.'}],
 'announcements':[{from:'AvaniBot',time:'09:00 AM',text:'Welcome to the new Call Centre workspace. Keep customer notes clear and follow-ups timely.'}]
};
