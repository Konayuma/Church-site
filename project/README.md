
# Zion Church Website

Welcome to the **Zion Church website** project, a modern and responsive web application designed to showcase Zion Church's online presence. This project was built to provide an inviting and user-friendly experience for visitors seeking to learn about the church, connect with the community, and grow in faith.

## Project Description

This project is a church website for Zion Church, featuring multiple sections to engage visitors and members alike. Key sections include:

- **Hero Banner**: A visually striking section with a hand-drawn black-and-white illustration of a cross and path, accompanied by the tagline **"We Are the City on a Hill"**, symbolizing the church's mission to shine God's light.
- **About Us**: Information about Zion Church’s history, beliefs, and mission.
- **Service Times**: Details on worship service schedules and locations.
- **Events**: Upcoming church events and community gatherings.
- **Sermons**: Access to recorded sermons for spiritual growth.
- **Testimonials**: Stories from the Zion Church community to inspire and connect.
- **Join Us Call-to-Action**: Encourages visitors to get involved through small groups, volunteering, or attending services.
- **Giving**: Options for online donations to support the church’s mission.

The website features a clean, visually appealing interface with a black-and-white logo showing a radiant halo around the cross, reflecting the church's focus on faith and radiance.

## Technologies Used

- **React with TypeScript** – For building a dynamic and type-safe user interface.
- **Vite** – As the build tool and development server for fast performance.
- **Tailwind CSS** – For utility-first styling to create a responsive and modern design.
- **Anima** – For design-to-code generation, streamlining the development process.
- **Node.js and npm** – For package management and running scripts.

## Project Structure

```plaintext
src/
  └── screens/ChurchSite/sections/
      ├── HeroSection.tsx
      ├── Testimonials.tsx
      ├── JoinUs.tsx
      └── ...

public/
  └── assets/
      ├── logo.svg
      ├── images/
      └── icons/

package.json        # Project metadata and dependencies
vite.config.ts      # Vite configuration
tailwind.config.js  # Tailwind CSS configuration
tailwind.css        # Global styles
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (latest stable version)
- **npm** (comes bundled with Node.js)

### Installation

Install the project dependencies by running:

```bash
npm install
```

### Running the Development Server

Start the development server with:

```bash
npm run dev
```

Your project will be accessible at [http://localhost:5173](http://localhost:5173/) after a few seconds.

### Building for Production

To build the project for production release, run:

```bash
npm run build
```

## Recommended Apps and Tools

- **Visual Studio Code** – Recommended code editor
- **Node.js** – Latest version for development
- **Modern Browser** – Such as Chrome, Firefox, or Edge
- **Git** – For version control and collaboration

## Branding and Design Notes

- **Logo**: A black-and-white hand-drawn cross with a radiant halo and winding path. The text "Zion Church" appears in bold, readable font.
- **Tagline**: "We Are the City on a Hill" featured prominently in the Hero section.
- **Navigation**:
  - **Discover**: About, Beliefs, History
  - **Join**: Services, Events, Connect
  - **Grow**: Sermons, Ministries, Give

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests. Please ensure your changes align with the church's branding and mission.

## License

This project is licensed under the [MIT License](LICENSE).
