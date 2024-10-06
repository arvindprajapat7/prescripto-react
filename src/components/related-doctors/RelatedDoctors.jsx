import React, { useEffect, useState } from "react";
import SectionHeading from "../sec-heading/SectionHeading";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContet";
import DoctorCard from "../doctor-card/DoctorCard";

const RelatedDoctors = () => {
    const [realtedDoctors, setRealatedDoctors] = useState([]);
    const {docId} = useParams();
    const {doctors} = useAppContext();
    const fetchRelatedDoctors =async ()=>{
        const relatedDocRes = doctors.find((doc)=>{return doc._id === docId}).speciality;
        const relatedDoc = [];

        doctors?.map((relDoc, index)=>{
            if(relDoc.speciality === relatedDocRes && relDoc._id !== docId){
                relatedDoc.push(relDoc)
            }
        })
        
        setRealatedDoctors(relatedDoc)
    }
    console.log(realtedDoctors)
    useEffect(()=>{
        fetchRelatedDoctors()
    },[docId])
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="text-center mx-1/4">
            <SectionHeading
              title="Related Doctors "
              subTitle="Simply browse through our extensive list of trusted doctors."
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
            {
                realtedDoctors?.map((relatedDoc, index)=>{
                    return <DoctorCard item={relatedDoc} key={index}/>
                })
            }
            </div>
        </div>
      </section>
    </>
  );
};

export default RelatedDoctors;
