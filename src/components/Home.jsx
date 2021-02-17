import React from "react";

export default function Home() {
    return (
        <div className="row text-white app_home">
            <div className="col-12 text-center">
                <span className="app_home_hi"> Hi, I am </span>
                <br />
                <h1 className="app_home_name"> MADHANKUMAR CHELLAMUTHU</h1>
                <p className="app_home_desc text-center pr-5">
                    Currently working at{" "}
                    <span className="text-bold"> Maplelabs, Bangalore</span> as
                    a <span className="text-bold">Software Enigneer.</span>I
                    have a proficient knowledge in Python, Javascript, React JS,
                    Express JS and Mongo DB. I have industrial exposure to the
                    technologies like Docker, Kubernetes, Jenkins, Terraform and
                    Ansible. I love solving new problems every day.
                </p>
            </div>
        </div>
    );
}
