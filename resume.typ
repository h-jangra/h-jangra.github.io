#import "@preview/basic-resume:0.2.9": *

#let name = "Himanshu Jangra"
#let location = "Noida, India"
// #let email = "hjangra@zohomail.com"
#let email = "himanshu_h@hcltech.com"
#let github = "github.com/h-jangra"
#let linkedin = "linkedin.com/in/hjangra1"
#let phone = ""
#let personal-site = "h-jangra.github.io"

#show: resume.with(
  author: name,
  location: location,
  email: email,
  github: github,
  linkedin: linkedin,
  personal-site: personal-site,
  accent-color: "#7287fd",
  font: "Calibri",
  paper: "a4",
  author-position: left,
  personal-info-position: right,
)

== Summary

Cloud & Automation Engineer experienced in AWS infrastructure, AMI lifecycle management, and Jenkins-based deployment workflows. Strong background in Windows and Linux systems, incident resolution, and building reliable cloud automation pipelines. Currently pursuing B.Sc. in Compute & Design (WiLP) at BITS Pilani.

== Experience

#work(
  title: "Analyst — Cloud & Infrastructure",
  location: "Noida, India",
  company: "HCLTech (Client: Johnson & Johnson)",
  dates: dates-helper(start-date: "Sep 2022", end-date: "Present"),
)

- Managed Windows and Linux infrastructure supporting network and backup services.
- Diagnosed and resolved AWS EC2 and security group configuration issues.
- Developed and maintained Jenkins pipelines for AWS AMI builds (Windows & RHEL).
- Automated AMI build, validation, and cross-account distribution processes.
- Coordinated incident resolution across teams to maintain service continuity.

== Education

#edu(
  institution: "BITS Pilani (Work Integrated Learning Programme)",
  location: "India",
  dates: dates-helper(start-date: "Feb 2023", end-date: "Present"),
  degree: "Bachelor of Science — Compute & Design",
)

- Coursework: Programming, Data Structures, Algorithms, System Design.

== Projects

#project(
  name: "NppVim",
  role: "C++ Plugin Development",
  url: "github.com/h-jangra/NppVim",
)

- Developed a Notepad++ plugin adding Vim-style modal editing and key bindings.
- Implemented command handling and editor integration using C++ and Win32 APIs.

#project(
  name: "Ghost.sh",
  role: "Shell Tooling",
  url: "github.com/h-jangra/Ghost.sh",
)

- Built a lightweight Bash utility providing inline ghost text suggestions.
- Focused on terminal usability and workflow efficiency.

#project(
  name: "DocumentViewer",
  role: "Chrome Extension Development",
  url: "github.com/h-jangra/DocumentViewer",
)

- Created a Chrome extension that opens documents in-browser instead of downloading.
- Implemented URL rewriting and viewer integration using JavaScript.

== Skills

#generic-one-by-two(
  left: [
*Languages*
 Python, C++, JavaScript 

*Web*
 React  
 
*Backend*
 FastAPI  
 
*Cloud & MLOps*
 AWS, Docker, CI/CD  

*Tools*
 Git, Linux
  ],
)

== Certifications

#generic-one-by-two(
  left: [
*Google Cloud Certified Generative AI Leader*
 
 *Issued* Aug 2025  

 *Credential ID* CERT-FUN-GAIL
  ],
)
