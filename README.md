<h1 align="center">Zoom Clone</h1>

<div>
  <h2>📋 Introduction</h2>
  <p>Built with the Next.js and TypeScript, this project replicates Zoom, a widely used video conferencing tool. It enables users to create meetings and access various meeting functionalities such as recording, screen sharing, and managing participants.</p>
</div>

<div>
  <h2>⚙️ Tech Stack</h2>
  
  - Next.js
  - Typescript
  - Clerk
  - Getstream
  - ShadCn
  - Tailwind CSS
</div>


<div>
  <h2>🤖 Features</h2>
  
 - <b>Authentication:</b> Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.
   
 - <b>Schedule Future Meetings:</b> Input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.
   
 - <b>Past Meetings List:</b> Access a list of previously held meetings, including details and metadata.
   
 - <b>View Recorded Meetings:</b> Access recordings of past meetings for review or reference.
   
 - <b>Personal Room:</b>  Users have a personal room with a unique meeting link for instant meetings, shareable with others.
   
 - <b>Exit Meeting:</b> Participants can leave a meeting, or creators can end it for all attendees.
   
 - <b>Meeting Controls:</b> Participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).
   
 - <b>Join Meetings via Link:<b> Easily join meetings created by others by providing a link.
   
 - <b>Secure Real-time Functionality:<b> All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.
   
 - <b>Responsive Design:<b> Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.
</div>


<div>
  <h2>🛫 Quick Start</h2>
  <p>Follow these steps to set up the project locally on your machine.</p>
  <p>Make sure you have the following installed on your machine:</p>
  
   - <a href="https://git-scm.com/">Git</a>
   - <a href="https://nodejs.org/pt">Node.js</a>
   - <a href="https://www.npmjs.com/">Npm</a> or <a href="https://yarnpkg.com/">Yarn</a>

   1. Clone this repository to your computer using the command:

  ```shell
  git clone https://github.com/FernandoBrino/zoom-clone.git
  ```

   2. Access the project directory:

  ```shell
  cd zoom-clone
  ```

  3. Install the project dependencies:

  ```shell
    npm install
  ```

  4. Set Up Environment Variables:

  <p>Create a new file named .env in the root of your project and add the following content:</p>

  ```shell
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    
    NEXT_PUBLIC_STREAM_API_KEY=
    STREAM_SECRET_KEY=
  ```

<p>Replace the placeholder values with your actual Clerk & getstream credentials. You can obtain these credentials by signing up on the Clerk website and getstream website.</p>


5. Running the Project:
  ```shell
    npm run dev
  ```
</div>
