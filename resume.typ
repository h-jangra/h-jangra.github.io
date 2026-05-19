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
  font: "Roboto",
  paper: "a4",
  author-position: left,
  personal-info-position: right,
)

== Summary

Cloud & Automation Engineer with experience in AWS infrastructure, cloud operations, CI/CD workflows, and automation tooling. Skilled in scripting and process automation using Python, JavaScript, Bash, and Java. Experienced with Linux systems, Jenkins workflows, and AWS services in enterprise environments. Currently upskilling in Java backend development with Spring Boot and REST APIs while pursuing B.Sc. in Compute & Design (WiLP) at BITS Pilani.

== Experience

#work(
  title: "Analyst — Cloud & Infrastructure",
  location: "Noida, India",
  company: "HCLTech (Client: Johnson & Johnson)",
  dates: dates-helper(start-date: "Sep 2022", end-date: "Present"),
)

- Managed Windows and Linux infrastructure supporting enterprise cloud services and deployment operations.
- Worked with Jenkins CI/CD pipelines for AWS/GCP/AZR AMI build, validation, and deployment workflows.
- Built internal automation tools and operational scripts using Python, JavaScript, and PowerShell to reduce manual effort.
- Troubleshot AWS EC2, EBS, IAM, networking, and security-related issues across cloud environments.
- Worked with AWS services including EC2, EBS, S3, CloudWatch, and IAM, with exposure to Lambda, SQS, SNS, SES, and RDS.
- Collaborated with cross-functional teams to resolve infrastructure and deployment issues.

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
    Python, C++, JavaScript, Java

    *Web*
    React

    *Backend*
    Spring Boot, FastAPI, REST APIs

    *Databases*
    PostgreSQL, MySQL

    *Cloud*
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


    *Microsoft Certified: Azure AI Engineer Associate*

    *Issued* 17 April 2026
  ],
)
