//import React from "react";

export default function Resume() {
  return (
    <div className="px-2">
      <div className="font-bold relative font-serif font-family: Times text-base pt-8 underline">
        <a href="/">Blake T. Hoosline</a>
      </div>
      <div className="font-serif font-family:Times text-sm py-2">
        <p>My address || My phone number</p>
      </div>
      <div>
        <div className="text-xs flex">
          <p>Visit my Linkedin:</p>
          <a
            className="underline"
            href="https://www.linkedin.com/in/blake-hoosline-937320204/"
          >
            https://www.linkedin.com/in/blake-hoosline-937320204/
          </a>
        </div>
        <div className="text-xs flex">
          <p>Email Me:</p>
          <a
            className="underline"
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJfqcBMjDfDzLsCnPMLPcvZlGtqSsdcJKcnMvkHZbRHPPGKVPCPRcNJnxKRjnzRtRzwqxtL"
          >
            blakehoosline2@gmail.com
          </a>
        </div>
      </div>
      <div>
        <div className="py-3 flex">
          <h2 className="font-bold font-serif font-family:Times">Education</h2>
          <h5 className="absolute right-12 font-serif font-family:Times text-sm pl-6">
            August 2019-May 2023
          </h5>
        </div>
        <ul className="px-4 font-serif font-family:Times text-sm">
          <li>
            • Earned Associates of Arts Degree from Anoka-Ramsey Community
            College
          </li>
          <li>
            • Earned Bachelors of Science in Computer Science, with a Minor in
            Applied Mathematics from St. Cloud State University. GPA: 3.1
          </li>
          <li>
            • Major focuses of degree include programming various applications
            and systems using C++, creating real world applications using Java,
            creating database queries using SQL and much more.
          </li>
          <li>
            • Worked an average of 20-30 hours per week, while attending school
            full time
          </li>
        </ul>
      </div>

      <div>
        <div className="py-3">
          <h2 className="font-bold font-serif font-family:Times">
            Technical Skills
          </h2>
        </div>
        <ul className="px-4 font-serif font-family:Times text-sm">
          <li>
            • Programming Languages: C++, C#, HTML 5, CSS, Tailwind CSS,
            Javascript, JQuery, Java, SQL
          </li>
          <li>• Frameworks: React, Next, Node</li>
          <li>• Operating Systems: Windows, Linux</li>
          <li className="pb-3">
            • Software: Office, Word, Excel, Visio, Visual Studio 2019, VS Code,
            Google Cloud, Oracle SQL
          </li>
        </ul>
      </div>

      <div>
        <div className="py-3">
          <h2 className="font-bold font-serif font-family:Times text-lg">
            Relevent Experience
          </h2>
        </div>
        <div>
          <div className="pt-3 flex">
            <h3 className="font-bold font-serif font-family:Times text-sm">
              Entry Level Programming
            </h3>
            {/* <h3 className="font-serif font-family:Times text-sm">
              - Skymetric Inc., Watertown, MN
            </h3> */}
            <h5 className="absolute right-12 font-serif font-family:Times text-sm">
              February 2020-Present
            </h5>
          </div>
        </div>
        <h3 className="font-serif font-family:Times text-sm">
          - Skymetric Inc., Watertown, MN
        </h3>
        <ul className="px-4 font-serif font-family:Times text-sm">
          <li>• Coding web pages using HTML 5, CSS, Javascript, C#</li>
          <li>
            • Writing documentation for various systems programmed in C#,
            Javascript, HTML5, SQL
          </li>
          <li>
            • Creating presentations of how to navigate through programs for
            company employees
          </li>
          <li className="pb-5">
            • Creating help videos of pages based off both interaction and
            software flow
          </li>
        </ul>
      </div>

      <div>
        <div className="py-3">
          <h2 className="font-bold font-serif font-family:Times text-lg">
            Additional Employment
          </h2>
        </div>
        <div>
          <div className="pt-3 flex">
            <h3 className="font-bold font-serif font-family:Times text-sm">
              Landscaping and Snow Plowing
            </h3>
            {/* <h3 className="font-serif font-family:Times text-sm">
              - Various cities throughout MN
            </h3> */}
            <h5 className="absolute right-12 font-serif font-family:Times text-sm">
              December 2017-March 2022
            </h5>
          </div>
        </div>
        <h3 className="font-serif font-family:Times text-sm">
          - Various cities throughout MN
        </h3>
        <ul className="px-4 font-serif font-family:Times text-sm">
          <li>
            • Learned the difficulty of manual labor to help pay for school
          </li>
          <li>
            • Building retaining walls, laying brick, taking out large trees,
            putting in drain systems, etc.
          </li>
          <li>• Shoveling and plowing snow in the wintertime</li>
        </ul>

        <div className="pt-5 flex">
          <h3 className="font-bold font-serif font-family:Times text-sm">
            Front Desk
          </h3>
          {/* <h3 className="font-serif font-family:Times text-sm">
            - Sam's Auto Parts, Fridley, MN
          </h3> */}
          <h5 className="absolute right-12 font-serif font-family:Times text-sm">
            August 2016-May 2017
          </h5>
        </div>
        <h3 className="font-serif font-family:Times text-sm">
          - Sam's Auto Parts, Fridley, MN
        </h3>
        <ul className="px-4 font-serif font-family:Times text-sm">
          <li>• Answered on average 50 calls per day</li>
          <li>
            • Completed sales with customers in person, as well as over the
            phone
          </li>
          <li>• Updated inventory daily using software program provided</li>
        </ul>

        <div className="pt-5 flex">
          <h3 className="font-bold font-serif font-family:Times text-sm">
            Shift Leader
          </h3>
          {/* <h3 className="font-serif font-family:Times text-sm">
            - Subway, Ham Lake, MN
          </h3> */}
          <h5 className="absolute right-12 font-serif font-family:Times text-sm">
            June 2017-November 2017
          </h5>
        </div>
        <h3 className="font-serif font-family:Times text-sm">
          - Subway, Ham Lake, MN
        </h3>
        <ul className="px-4 font-serif font-family:Times text-sm">
          <li>
            • Served hundreds of customers daily. Great customer service was
            expected
          </li>
          <li>
            • Multi-tasking as a Shift Leader was a must; helping multiple
            customers at a time as well as overseeing co-workers if a manager
            was not in, keeping the store clean, etc.
          </li>
          <li className="pb-8">
            • Learned software program for having customers pay. Had to know how
            to use the program, perfectly
          </li>
        </ul>
      </div>
    </div>
  );
}
