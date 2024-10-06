import logo from './assets/images/logo.svg'
import profileIcon from './assets/images/profile-1.png';
import downArrow from './assets/images/dropdow_icon.svg';
import profileImg2 from './assets/images/profile-2.png';
import profileImg3 from './assets/images/profile-3.png';
import heroImage from './assets/images/hero-image.png';
import generalPhysician from './assets/images/general-physician.png';
import Gynecologist from './assets/images/Gynecologist.png';
import Dermatologist from './assets/images/Dermatologist.png';
import Pediatricians from './assets/images/Pediatricians.png';
import Neurologist from './assets/images/Neurologist.png';
import Gastroenterologist from './assets/images/Gastroenterologist.png';
import doctor1 from './assets/images/doctor-1.png'
import doctor2 from './assets/images/doctor-2.png'
import doctor3 from './assets/images/doctor-3.png'
import doctor4 from './assets/images/doctor-4.png'
import doctor5 from './assets/images/doctor-5.png'
import doctor6 from './assets/images/doctor-6.png'
import doctor7 from './assets/images/doctor-7.png'
import doctor8 from './assets/images/doctor-8.png'
import doctor9 from './assets/images/doctor-9.png'
import doctor10 from './assets/images/doctor-10.png'
import doctor11 from './assets/images/doctor-11.png'
import doctor12 from './assets/images/doctor-12.png'
import doctor13 from './assets/images/doctor-13.png'
import doctor14 from './assets/images/doctor-14.png'
import doctor15 from './assets/images/doctor-15.png'
import bannerDoctor from './assets/images/banner-image.png'

export const assets = {logo, profileIcon, downArrow, profileImg2, profileImg3, heroImage, generalPhysician, Gynecologist, Dermatologist, Pediatricians,Neurologist,Gastroenterologist, doctor1,doctor2,doctor3,doctor4,doctor5,doctor6,doctor7,doctor8,doctor9,doctor10,doctor11,doctor12,doctor13,doctor14,doctor15, bannerDoctor }



const specialityData=[
    {
        speciality:'General physician',
        image:generalPhysician
    },
    {
        speciality:'Gynecologist',
        image:Gynecologist
    },
    {
        speciality:'Dermatologist',
        image:Dermatologist
    },
    {
        speciality:'Pediatricians',
        image:generalPhysician
    },
    {
        speciality:'Neurologist',
        image:Neurologist
    },
    {
        speciality:'Gastroenterologist',
        image:Gastroenterologist
    }
]

export default specialityData;


export const doctors =[
    {
        _id : 'doc1',
        name : 'Dr. Richard James',
        image : doctor1,
        speciality:'General physician',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc2',
        name : 'Dr. Emily Carter',
        image : doctor2,
        speciality:'General physician',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc3',
        name : 'Dr. Sarah Wilson',
        image : doctor2,
        speciality:'General physician',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc4',
        name : '"Dr. Michael Brown',
        image : doctor4,
        speciality:'Gynecologist',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc5',
        name : 'Dr. John Smith',
        image : doctor5,
        speciality:'Gynecologist',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc6',
        name : 'Dr.  Laura Garcia',
        image : doctor6,
        speciality:'Dermatologist',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc7',
        name : 'Dr.  Chris Martinez',
        image : doctor7,
        speciality:'Dermatologist',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc8',
        name : 'Dr.  Jessica Taylor',
        image : doctor8,
        speciality:'Pediatricians',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc9',
        name : 'Dr. Daniel Anderson',
        image : doctor9,
        speciality:'Pediatricians',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc10',
        name : 'Dr. Nancy Clark',
        image : doctor10,
        speciality:'Neurologist',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc11',
        name : 'Dr.  Robert Lewis',
        image : doctor11,
        speciality:'Neurologist',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc12',
        name : 'Dr. Linda Walker',
        image : doctor12,
        speciality:'Gastroenterologist',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc13',
        name : 'Dr. Thomas Hall',
        image : doctor13,
        speciality:'Gastroenterologist',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc14',
        name : 'Dr.  Patricia Allen ',
        image : doctor14,
        speciality:'Gastroenterologist',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    },
    {
        _id : 'doc15',
        name : 'Dr. Edward Evans ',
        image : doctor15,
        speciality:'Gastroenterologist',
        degree:'MBBS',
        experience : '4 year',
        about : 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fee:505,
        address:{
            line1 : '54709 Willms Station ',
            line2:'Suite 350, Washington, USA'
        }

    }
]