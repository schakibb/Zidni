import * as databaseArchitecture from "../../data/visualisation/bdd/databaseArchitecture.json";
import * as databaseModels from "../../data/visualisation/bdd/databaseModels.json";
import VisualisationComponent from "../../components/global/Visualisation/index";

export const bdd = {
  id: 25,
  title: "Databases",
  description:
    "Master database fundamentals, including design, SQL, normalization, indexing, transactions, and optimization for efficient data management and retrieval.",
  comingSoon: true,
  isNew: false,
  chapters: [
    {
      chapterId: 1,
      title: "Presentation of databases",
      chapterDescription: <p>Initial concepts and terminology </p>,
      subChapter: [
        {
          title: "1) Concept of files",
          subChapterContent: (
            <div>
              <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-secondary">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold ">
                      Base
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold ">
                      DBMS
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold ">
                      Flat File System
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-transparent">
                    <td className="border border-gray-200 px-4 py-2 font-medium ">
                      Definition
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      DBMS is a collection of interrelated data and software
                      programs to access those data.
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      Flat file system stores data in a plain text file. Here,
                      the records are specified in a single line.
                    </td>
                  </tr>
                  <tr className="bg-transparent">
                    <td className="border border-gray-200 px-4 py-2 font-medium ">
                      Data Redundancy
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      There is no problem of data redundancy.
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      There is a main problem of data redundancy.
                    </td>
                  </tr>
                  <tr className="bg-transparent">
                    <td className="border border-gray-200 px-4 py-2 font-medium ">
                      Cost
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      DBMS software is very costly and regular updates make it
                      costly.
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      Flat file are cost effective.
                    </td>
                  </tr>
                  <tr className="bg-transparent">
                    <td className="border border-gray-200 px-4 py-2 font-medium ">
                      Use
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      Mostly, large organizations use DBMS who can afford it and
                      have a large number of clients and employees to be
                      managed.
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      Small organizations use it as it is cost effective and who
                      have to deal with a small number of clients and employees.
                    </td>
                  </tr>
                  <tr className="bg-transparent">
                    <td className="border border-gray-200 px-4 py-2 font-medium ">
                      Views
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      Views are created and employees can’t see all information
                      available, hence there is security.
                    </td>
                    <td className="border border-gray-200 px-4 py-2 ">
                      Any information can be seen by anyone, hence there is no
                      security.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          title: "2) Introduction to databases",
          subChapterContent: (
            <div>
              <p>
                A database is an organized collection of data that is stored and
                accessed electronically. It is designed to efficiently manage,
                retrieve, and store data, allowing users to perform operations
                such as querying, updating, and administration. Databases are
                managed by Database Management Systems (DBMS), which provide
                tools for data manipulation, security, and integrity. They are
                used in a variety of applications, ranging from simple
                record-keeping to complex data analysis and transaction
                processing in large-scale enterprise environments.
              </p>
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          title: "3) Database management systems",
          subChapterContent: (
            <div>
              <h1 class="text-2xl font-bold mb-4">
                What is a database system?
              </h1>
              <p class="mb-4">
                A Database Management System (DBMS) is system software used to
                manage the organization by storage, access, modification and
                integrity of data in a structured database.
              </p>
              <p class="mb-4">
                A DBMS makes it possible for end users to create, read, update
                and delete data in a database systematically.
              </p>
              <p class="mb-4">
                The DBMS essentially serves as an interface between the database
                and end users, ensuring that data is consistently organized and
                remains easily accessible.
              </p>

              <h1 class="text-2xl font-bold mb-4">Why do we need DBMS?</h1>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">
                  Manages big amounts of data
                </h2>
                <p>
                  A database stores and manages a large amount of data on a
                  daily basis. This would not be possible using any other tool
                  such as a spreadsheet as they would simply not work.
                </p>
              </div>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">
                  Improved Data Sharing and Data Security
                </h2>
                <p>
                  Proper database management systems help increase
                  organizational accessibility to data, which in turn helps the
                  end users share the data quickly and effectively across the
                  organization.
                </p>
              </div>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">Accurate</h2>
                <p>
                  A database is pretty accurate as it has all sorts of built-in
                  constraints, checks etc. This means that the information
                  available in a database is guaranteed to be correct in most
                  cases.
                </p>
              </div>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">Easy to update data</h2>
                <p>
                  In a database, it is easy to update data using various Data
                  Manipulation languages (DML) available. One of these languages
                  is SQL.
                </p>
              </div>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">
                  Effective Data Integration
                </h2>
                <p>
                  Implementing a data management system promotes an integrated
                  picture of an organization’s operations. It becomes easy to
                  see how processes in one segment of the organization affect
                  other segments.
                </p>
              </div>

              <div class="mb-4">
                <h2 class="text-xl font-semibold mb-2">
                  Easy to research data
                </h2>
                <p>
                  It is very easy to access and research data in a database.
                  This is done using Data Query Languages (DQL) which allow
                  searching of any data in the database and performing
                  computations on it.
                </p>
              </div>
              <div class="mb-6">
                <h1 class="text-2xl font-bold mb-4">INSTANCE</h1>
                <p class="mb-4">
                  The data stored in a database at a particular moment of time
                  is called an instance of the database. Database schema defines
                  the variable declarations in tables that belong to a
                  particular database; the value of these variables at a moment
                  of time is called the instance of that database.
                </p>
                <p class="mb-4">
                  For example, let's say we have a single table student in the
                  database, today the table has 100 records, so today the
                  instance of the database has 100 records. Let's say we are
                  going to add another 100 records in this table by tomorrow so
                  the instance of the database tomorrow will have 200 records in
                  the table.
                </p>
              </div>

              <div class="mb-6">
                <h1 class="text-2xl font-bold mb-4">SCHEMA</h1>
                <p class="mb-4">
                  Design of a database is called the schema. Schema is of three
                  types: Physical schema, logical schema and view schema.
                </p>
              </div>

              <div class="mb-6">
                <h1 class="text-2xl font-bold mb-4">SUBSCHEMA</h1>
                <p class="mb-4">
                  Subschema is a subset or proper subset of the schema and
                  inherits the same property that a schema has. The plan (or
                  scheme) for a view is often called subschema. It gives the
                  users a window through which he or she can view only that part
                  of the database, which is of interest to him/her.
                </p>
              </div>

              <div>
                <h1 class="text-2xl font-bold mb-4">
                  What is a data administrator?
                </h1>
                <p class="mb-4">
                  A data administration (also known as a database administration
                  manager, data architect, or information center manager) is a
                  high level function responsible for the overall management of
                  data resources in an organization. In order to perform its
                  duties, the DA must know a good deal of system analysis and
                  programming.
                </p>
              </div>
            </div>
          ),
          subChapterVisualisation: null,
        },
        {
          title: "4) Database Architecture",
          subChapterContent: (
            <div>
              <h4 className="font-bold underline">Two Tier Architecture</h4>
              <br></br>
              <p>
                DBMS architecture 2 layer architecture Client-Server The client
                that runs the application and the server that handles the
                database back-end Multiple users able to access the DB
                simultaneously. Server is processing data while the client for
                business logic and presentation.
              </p>
              <h5 className="font-bold">Two parts: </h5>
              <ul className="list-disc list-inside">
                <li>Client application: User Interface</li>
                <li>Server: Database</li>
              </ul>
              <h5 className="font-bold">Advantages:</h5>
              <ul>
                <li>Easy to maintain and modification is bit easy </li>
                <li>Communication is faster</li>
              </ul>
              <h5 className="font-bold">Disadvantages: </h5>
              <p>
                Performance will be degrade upon increasing the users
                Cost-ineffective
              </p>
              <br></br>
              <h4 className="font-bold underline">Three Tier Architecture</h4>
              <br></br>
              <ul className="list-disc list-inside">
                <li>
                  These Applications run on the Traditional Client/Server Model
                  But from an Application server.{" "}
                </li>
                <li>
                  Client only Displays the GUI and data, but has no part in
                  producing results
                </li>
                <li>Database Server Serves to few Connections</li>
              </ul>
              <h5 className="font-bold">Three layers: </h5>
              <ul className="list-disc list-inside">
                <li>
                  Client: User Interface <br></br>Contains the UI part of our
                  application. This layer is used for the design purpose where
                  data is presented to the user or input is taken from the user
                </li>
                <li>
                  Application Server: Business Logic<br></br>All business logic
                  written like validation of data, calculations, data insertion
                  etc. This acts as an interface between Client layer and Data
                  Access Layer. Make communication faster between client and
                  data layer.
                </li>
                <li>
                  Database Server: Database<br></br>Actual database comes in the
                  picture. Contains methods to connect with the database and to
                  perform insert, update, delete, get data from the database
                  based on our input data.
                </li>
              </ul>
              <h5 className="font-bold">Advantages:</h5>
              <ul className="list-disc list-inside">
                <li>
                  Performance :Because the Presentation tier can cache requests,
                  network utilization is minimized, and the load is reduced on
                  the Application and Data tiers.{" "}
                </li>
                <li>Scalability: Each tier can scale horizontally </li>
                <li>Better Reuse</li>
                <li>Improve Data Integrity </li>
                <li>
                  High degree of flexibility in deployment platform and
                  configuration{" "}
                </li>
                <li>
                  Improved Security: Client has not direct access to the
                  database.{" "}
                </li>
                <li>
                  Easy to maintain and modification is bit easy, won't affect
                  other modules
                </li>
              </ul>
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={databaseArchitecture}
              title={"Database Architectures"}
              description={""}
            />
          ),
        },
        {
          title: "5) Database models",
          subChapterContent: (
            <div>
              <div>
                <h2 class="text-2xl font-bold mb-4">Hierarchical Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Organizes data into
                  a tree-like structure where each record has a single parent
                  and can have multiple children.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Mainly used in early
                  database systems and applications that require a strict
                  hierarchical structure, such as directory structures.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Simple and efficient for specific applications.</li>
                    <li>
                      Fast data retrieval when dealing with hierarchical data.
                    </li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Inflexible due to rigid structure.</li>
                    <li>
                      Difficult to manage relationships between different
                      branches.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Network Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Similar to the
                  hierarchical model but allows multiple parent records,
                  creating a graph structure.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Used in applications
                  where data relationships are complex, such as
                  telecommunications and transport networks.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>More flexible than the hierarchical model.</li>
                    <li>Efficient for many-to-many relationships.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Complex to design and manage.</li>
                    <li>Requires intricate programming knowledge.</li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Relational Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Organizes data into
                  tables (relations) where each table is composed of rows and
                  columns.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Most widely used model
                  in modern database systems, underpinning SQL databases like
                  MySQL, PostgreSQL, and Oracle.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Simple and intuitive design.</li>
                    <li>Flexible and powerful querying with SQL.</li>
                    <li>
                      Supports ACID (Atomicity, Consistency, Isolation,
                      Durability) properties for transaction management.
                    </li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      Can become complex with large and highly relational
                      datasets.
                    </li>
                    <li>
                      Performance can degrade with extremely large volumes of
                      data.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Object-Oriented Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Stores data in the
                  form of objects, similar to object-oriented programming.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Useful in applications
                  requiring complex data representation, such as CAD/CAM,
                  multimedia, and engineering databases.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      Seamlessly integrates with object-oriented programming
                      languages.
                    </li>
                    <li>Capable of handling complex data types.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      Can be less efficient for simpler queries compared to
                      relational databases.
                    </li>
                    <li>
                      Less mature and standardized than relational databases.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Document Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Stores data in
                  document format, often using JSON or XML.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Popular in content
                  management systems, blogging platforms, and applications
                  requiring flexible data representation, such as MongoDB.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Flexible and can store varying data structures.</li>
                    <li>Scales easily horizontally.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Complex querying can be challenging.</li>
                    <li>
                      Lacks standardization across different implementations.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Key-Value Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Stores data as a
                  collection of key-value pairs, where each key is unique.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Commonly used in caching
                  systems and real-time applications, such as Redis and
                  DynamoDB.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Extremely fast for read and write operations.</li>
                    <li>Simple and easy to implement.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Limited querying capabilities.</li>
                    <li>
                      Not suitable for complex relationships between data.
                    </li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Column-Family Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Stores data in
                  columns rather than rows, which allows efficient retrieval of
                  specific columns.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Suitable for data
                  warehousing and big data applications, such as Apache
                  Cassandra and HBase.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Efficient storage and retrieval of sparse data.</li>
                    <li>Highly scalable and performant for large datasets.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>
                      More complex to design and query than traditional
                      relational databases.
                    </li>
                    <li>Schema changes can be challenging.</li>
                  </ul>
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-bold mb-4">Graph Model</h2>
                <p class="mb-2">
                  <span class="font-bold">Definition:</span> Represents data in
                  the form of nodes (entities) and edges (relationships).
                </p>
                <p class="mb-2">
                  <span class="font-bold">Usage:</span> Ideal for applications
                  involving complex relationships, such as social networks,
                  recommendation engines, and fraud detection, using databases
                  like Neo4j.
                </p>
                <p class="mb-2">
                  <span class="font-bold">Advantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Efficiently handles many-to-many relationships.</li>
                    <li>Natural representation of connected data.</li>
                  </ul>
                </p>
                <p>
                  <span class="font-bold">Disadvantages:</span>
                  <ul class="list-disc pl-5 space-y-1">
                    <li>Can be complex to design and query.</li>
                    <li>
                      Less mature and standardized compared to relational
                      databases.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={databaseModels}
              title={"Database Models"}
              description={""}
            />
          ),
        },
      ],
    },
  ],
  //fin
  path: "/courses/bdd/learn",
  quiz: "/courses/bdd/quiz", // quiz route will redirect to the next page if finished (congrats on every finish)
  next: "/courses/thg/learn",
};
