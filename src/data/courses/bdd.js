import * as databaseArchitecture from "../../data/visualisation/bdd/databaseArchitecture.json";
import * as databaseModels from "../../data/visualisation/bdd/databaseModels.json";
import * as erDiagram from "../../data/visualisation/bdd/er_diagram.json";
import { VisualisationComponent } from "../../components/global/Visualisation/index";

export const bdd = {
  id: 25,
  title: "Databases",
  description:
    "Master database fundamentals, including design, SQL, normalization, and optimization for efficient data management and retrieval.",
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
                    Flat file system stores data in a plain text file. Here, the
                    records are specified in a single line.
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
                    have a large number of clients and employees to be managed.
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
    {
      chapterId: 2,
      title: "Database design & Relational model",
      chapterDescription: (
        <p>ER diagram and relational model transformation </p>
      ),
      subChapter: [
        {
          title: "1) Entity-Relationship Model",
          subChapterContent: (
            <div>
              <div>
                <h2 class="text-2xl font-bold mb-4">
                  Introduction to ER Models
                </h2>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">What are ER Models</h3>
                <p class="mb-4">
                  An Entity Relationship Diagram (ERD) is a visual
                  representation of different data using conventions that
                  describe how these data are related to each other.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">ER Diagram</h3>
                <p class="mb-4">
                  ER-modeling is a data modeling technique used in software
                  engineering to produce a conceptual data model of an
                  information system. Diagrams created using this ER-modeling
                  technique are called Entity-Relationship Diagrams, or ER
                  diagrams or ERDs.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Entity</h3>
                <p class="mb-4">
                  It is a collection of objects. An entity is an object that is
                  distinguishable from other objects by a set of attributes. An
                  entity may be an 'object' with a physical existence. This is
                  the basic object of the E-R Model, which is a 'thing' in the
                  real world with an independent existence.
                </p>
                <p class="mb-4">
                  For example, in a school database, students, teachers,
                  classes, and courses offered can be considered as entities.
                  All these entities have some attributes or properties that
                  give them their identity.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Types of Entity</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    <span class="font-bold">Strong Entities:</span> An entity
                    that exists independently of other entity type.
                  </li>
                  <li>
                    <span class="font-bold">Weak Entities:</span> An entity type
                    whose existence depends on some other entity type.
                  </li>
                  <li>
                    <span class="font-bold">Recursive Entities:</span> A
                    recursive entity is one in which a relation can exist
                    between occurrences of the same entity set. This occurs in a
                    unary relationship. Let us take the example of an employee
                    who is also a manager. But a manager is also an employee,
                    whose details will be held in the employee entity.
                  </li>
                  <li>
                    <span class="font-bold">Composite Entities:</span> If a Many
                    to Many relationship exists we must create a bridge entity
                    to convert it into 1 to Many. Bridge entity composed of the
                    primary keys of each of the entities to be connected. The
                    bridge entity is known as a composite entity. A composite
                    entity is represented by a diamond shape within a rectangle
                    in an ER Diagram.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Entity Sets</h3>
                <p class="mb-4">
                  An entity set is a collection of similar types of entities. An
                  entity set may contain entities with attributes sharing
                  similar values. For example, a Students set may contain all
                  the students of a school; likewise, a Teachers set may contain
                  all the teachers of a school from all faculties. Entity sets
                  need not be disjoint.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Weak Entity</h3>
                <p class="mb-4">
                  A weak entity is an entity that depends on the existence of
                  another entity. In more technical terms it can be defined as
                  an entity that cannot be identified by its own attributes. It
                  uses a foreign key combined with its attributes to form the
                  primary key.
                </p>
                <p class="mb-4">
                  An entity like order item is a good example for this. The
                  order item will be meaningless without an order so it depends
                  on the existence of the order.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Attribute</h3>
                <p class="mb-4">
                  Entities are represented by means of their properties, called
                  attributes. All attributes have values. For example, a student
                  entity may have name, class, and age as attributes. There
                  exists a domain or range of values that can be assigned to
                  attributes. For example, a student's name cannot be a numeric
                  value. It has to be alphabetic. A student's age cannot be
                  negative, etc.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Types of Attributes</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    <span class="font-bold">Simple attributes:</span> Simple
                    attributes are atomic values, which cannot be divided
                    further. For example, a student's phone number is an atomic
                    value of 10 digits.
                  </li>
                  <li>
                    <span class="font-bold">Composite attribute:</span> If the
                    attributes are composite, they are further divided in a tree
                    like structure. Every node is then connected to its
                    attribute. That is composite attributes are represented by
                    eclipses that are connected with an eclipse. Composite
                    attributes are made of more than one simple attribute. For
                    example, a student's complete name may have first_name and
                    last_name.
                  </li>
                  <li>
                    <span class="font-bold">Derived attribute:</span> Derived
                    attributes are the attributes that do not exist in the
                    physical database, but their values are derived from other
                    attributes present in the database. For example,
                    average_salary in a department should not be saved directly
                    in the database, instead it can be derived. For another
                    example, age can be derived from date_of_birth. For example
                    for a circle the area can be derived from the radius.
                  </li>
                  <li>
                    <span class="font-bold">Multi-valued attribute:</span>{" "}
                    Multi-valued attributes may contain more than one value. For
                    example, a person can have more than one phone number,
                    email_address, etc. For example a teacher entity can have
                    multiple subject values.
                  </li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          title: "2) Relationships",
          subChapterContent: (
            <div>
              <div>
                <h2 class="text-2xl font-bold mb-4">Relationships</h2>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">What are Relationships</h3>
                <p class="mb-4">
                  Relationships are associations between entities. For example,
                  a student entity may have a relationship with a teacher entity
                  through a relationship called "has." Relationships are
                  represented by diamond shapes in an ER Diagram.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Types of Relationships</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    <span class="font-bold">One-to-One Relationship:</span> A
                    one-to-one relationship is when a single instance of an
                    entity is associated with a single instance of another
                    entity. For example, a person can have only one passport
                    number, and a passport number is associated with only one
                    person.
                  </li>
                  <li>
                    <span class="font-bold">One-to-Many Relationship:</span> A
                    one-to-many relationship is when a single instance of an
                    entity is associated with multiple instances of another
                    entity. For example, a teacher can teach multiple students,
                    but a student can have only one teacher.
                  </li>
                  <li>
                    <span class="font-bold">Many-to-Many Relationship:</span> A
                    many-to-many relationship is when multiple instances of an
                    entity are associated with multiple instances of another
                    entity. For example, a student can enroll in multiple
                    courses, and a course can have multiple students.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">
                  Cardinality & Participation{" "}
                </h3>
                <p class="mb-4">
                  Cardinality and participation are two important aspects of
                  relationships in an ER Diagram.
                </p>
                <p class="mb-4">
                  <span class="font-bold">Cardinality:</span> Cardinality
                  defines the number of instances of an entity that can be
                  associated with the number of instances of another entity. It
                  is represented by the symbols "1" (one) and "N" (many).
                </p>
                <p class="mb-4">
                  <span class="font-bold">Participation:</span> Participation
                  defines whether an entity is mandatory or optional in a
                  relationship. It is represented by the symbols "0" (optional)
                  and "1" (mandatory).
                </p>
                <p class="mb-4">
                  e.g. A student can enroll in multiple courses (many) and a
                  course can have multiple students (many), so the relationship
                  between student and course is many-to-many. course are
                  mandatory and student is optional in this relationship.
                  student(0..N):(1..N)course -mandatory just for explanation
                  purpose-
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Degree of Relationship</h3>
                <p class="mb-4">
                  The degree of a relationship is the number of entities
                  associated with a relationship. It is of three types: Unary,
                  Binary, and Ternary. Unary relationship involves a single
                  entity, Binary relationship involves two entities, and Ternary
                  relationship involves three entities.
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">
                  Attributes of Relationships
                </h3>
                <p class="mb-4">
                  Relationships can have attributes. For example, a student
                  entity may have a relationship with a teacher entity through a
                  relationship called "has" and the relationship may have an
                  attribute called "grade."
                </p>
              </div>
            </div>
          ),
          subChapterVisualisation: (
            <VisualisationComponent
              animationData={erDiagram}
              title={"Entity Relationship Diagram"}
              description={
                "represents the relationship between student and course"
              }
            />
          ),
        },
        {
          title: "3) Relational Model",
          subChapterContent: (
            <div>
              <div>
                <h2 class="text-2xl font-bold mb-4">
                  Introduction to the Relational Model
                </h2>
              </div>
              <div>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    The relational model was proposed by Edgar Frank Codd in
                    1970.
                  </li>
                  <li>
                    The relational model is a Logical Data Model (LDM) based on
                    set theory and predicate logic.
                  </li>
                  <li>
                    Today, the relational model is by far the most widespread in
                    the field of databases.
                  </li>
                  <li>
                    In this model, the database is represented as a set of
                    relations that can be viewed as tables.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Relational Model</h3>
                <p class="mb-4">
                  Informally, the relational model can be defined as follows:
                </p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    Data is organized in the form of two-dimensional tables,
                    also called relations, whose rows are called n-tuples or
                    tuples.
                  </li>
                  <li>Data is manipulated by relational algebra operators.</li>
                  <li>
                    The coherent state of the database is defined by a set of
                    integrity constraints.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Basic Concepts</h3>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    <span class="font-bold">Attribute:</span> An attribute is a
                    property describing information stored in a database.
                    Example: a person's age, a person's name, social security
                    number.
                  </li>
                  <li>
                    <span class="font-bold">Domain:</span> The domain of an
                    attribute is the set, finite or infinite, of its possible
                    values. Example:
                    <ul class="pl-5 mt-2 space-y-1">
                      <li>ID_Student: Sequential number from 1 to 9999</li>
                      <li>Name_Student: String of 15 characters</li>
                      <li>
                        City_Student: {"{'Algiers', 'Oran', 'Setif', ...}"}
                      </li>
                      <li>Age_Student: Integer between 18 and 65</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Relation</h3>
                <p class="mb-4">
                  A relation is a subset of the Cartesian product of n attribute
                  domains.
                </p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    Let D1, D2, ..., Dn be domains, not necessarily distinct. A
                    relation R(A1: D1, A2: D2, ..., An: Dn) is defined as: R ⊆
                    D1 x D2 x ... x Dn.
                  </li>
                  <li>
                    A relation is represented as a two-dimensional table where
                    the n attributes correspond to the titles of the n columns.
                  </li>
                </ul>
                <table class="table-auto w-full mt-4">
                  <thead>
                    <tr className="bg-secondary">
                      <th class="px-4 py-2">ID_Student</th>
                      <th class="px-4 py-2">Name_Student</th>
                      <th class="px-4 py-2">City_Student</th>
                      <th class="px-4 py-2">Age_Student</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border px-4 py-2">0001</td>
                      <td class="border px-4 py-2">Ahmed</td>
                      <td class="border px-4 py-2">Algiers</td>
                      <td class="border px-4 py-2">20</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">0002</td>
                      <td class="border px-4 py-2">Mohamed</td>
                      <td class="border px-4 py-2">Oran</td>
                      <td class="border px-4 py-2">19</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">0003</td>
                      <td class="border px-4 py-2">Sarra</td>
                      <td class="border px-4 py-2">Setif</td>
                      <td class="border px-4 py-2">21</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">0004</td>
                      <td class="border px-4 py-2">Chaima</td>
                      <td class="border px-4 py-2">Illizi</td>
                      <td class="border px-4 py-2">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <ul class="list-disc pl-5 space-y-2">
                  <li>
                    <span class="font-bold">Degree:</span> The degree of a
                    relation is its number of attributes.
                  </li>
                  <li>
                    <span class="font-bold">n-tuple or tuple:</span> An n-tuple
                    or tuple is an element of the set represented by a relation.
                    In other words, an n-tuple is a row in the table
                    representing the relation.
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Relation Schema</h3>
                <p class="mb-4">
                  A relation schema specifies the name of the relation as well
                  as the list of attributes with their domains. Let R(A1: D1,
                  A2: D2, ..., An: Dn) be a relation schema such that:
                </p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>R: Name of the relation.</li>
                  <li>A1, A2, ..., An: Attributes of the relation R.</li>
                  <li>
                    D1, D2, ..., Dn: Domains of the attributes A1, A2, ..., An
                    respectively.
                  </li>
                </ul>
                <p class="mt-4">
                  Example: Etudiant(ID_Etudiant : Num(4), Nom_Etudiant :
                  String(15), Ville_Etudiant : String(10), Age_Etudiant :
                  Num(2))
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Relational Schema</h3>
                <p class="mb-4">
                  A relational schema (or schema of a database) consists of the
                  set of relation schemas, all of which have unique names. If
                  R1, R2, ..., Rn form a set of relation schemas, then we can
                  write the relational database schema R as:
                </p>
                <p class="mt-4">R = {"{ R1, R2, ..., Rn} "} </p>
                <p class="mt-4">
                  Example: Bibliothèque = {"{(Etudiant, Livre)}"}
                </p>
                <p class="mt-4">
                  Etudiant(ID_Etudiant, Nom_Etudiant, Ville_Etudiant,
                  Age_Etudiant)
                </p>
                <p class="mt-4">
                  Livre(ISSN, Titre, Date_Edition, #ID_Etudiant)
                </p>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Relational Database</h3>
                <p class="mb-4">
                  A relational database consists of the set of n-tuples of the
                  various relations in the relational schema. Example:
                </p>

                <table class="table-auto w-full mt-4">
                  <thead>
                    <tr className="bg-secondary">
                      <th class="px-4 py-2">ID_Student</th>
                      <th class="px-4 py-2">Name_Student</th>
                      <th class="px-4 py-2">City_Student</th>
                      <th class="px-4 py-2">Age_Student</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border px-4 py-2">0001</td>
                      <td class="border px-4 py-2">Ahmed</td>
                      <td class="border px-4 py-2">Algiers</td>
                      <td class="border px-4 py-2">20</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">0002</td>
                      <td class="border px-4 py-2">Mohamed</td>
                      <td class="border px-4 py-2">Oran</td>
                      <td class="border px-4 py-2">19</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">0003</td>
                      <td class="border px-4 py-2">Sarra</td>
                      <td class="border px-4 py-2">Setif</td>
                      <td class="border px-4 py-2">21</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">0004</td>
                      <td class="border px-4 py-2">Chaima</td>
                      <td class="border px-4 py-2">Illizi</td>
                      <td class="border px-4 py-2">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="overflow-x-auto mt-8">
                <table class="table-auto w-full">
                  <thead>
                    <tr className="bg-secondary">
                      <th class="px-4 py-2">ISSN</th>
                      <th class="px-4 py-2">Title</th>
                      <th class="px-4 py-2">Publication Date</th>
                      <th class="px-4 py-2">ID_Student</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border px-4 py-2">INF01</td>
                      <td class="border px-4 py-2">SFSD</td>
                      <td class="border px-4 py-2">2000</td>
                      <td class="border px-4 py-2">0003</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">INF02</td>
                      <td class="border px-4 py-2">BDD</td>
                      <td class="border px-4 py-2">2020</td>
                      <td class="border px-4 py-2">0001</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">INF03</td>
                      <td class="border px-4 py-2">SI</td>
                      <td class="border px-4 py-2">2015</td>
                      <td class="border px-4 py-2">0002</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">INF04</td>
                      <td class="border px-4 py-2">POO</td>
                      <td class="border px-4 py-2">2013</td>
                      <td class="border px-4 py-2">0004</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Intension and Extension</h3>
                <p class="mb-4">
                  The structure of the relation, with domain specifications and
                  other constraints, is part of the intension of the database,
                  while the relation with all its tuples represents an instance
                  or extension of the database.
                </p>
              </div>
            </div>
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
