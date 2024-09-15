# Personal Portfolio

## Overview
This project is a personal portfolio website designed to describe who I am as a person and show case my skills, education, and experiences. The website is built using Cursor, Claude Sonnet3.5, HTML, CSS, and JavaScript, and features a responsive design that adapts to various screen sizes.

## Website sections
- **Home Section**: Introduces the creator with a brief description.
- **About Section**: Provides information about personal interests and transferable skills.
- **Skills Section**: Highlights key strengths and competencies.
- **Educations Section**: Lists educational qualifications and certifications.
- **Experiences Section**: Details professional experiences and internships.
- **Contact Section**: Offers a way for visitors to reach out via email and social media links.

## Technologies Used
- **HTML**: Structure of the web pages.
- **CSS**: Styling and layout, including responsive design.
- **JavaScript**: Interactive elements, such as smooth scrolling and content toggling.

## Getting Started
To view/modify the project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/ValentinOzeel/who_i_am_portfolio.git
   ```
2. Open `index.html` in your web browser.

## Deployment

You can use GitHub Pages to deploy the website:

1. Push your changes to the GitHub repository.
2. Go to your repository settings on GitHub.
3. Navigate to the "Pages" section.
4. Select the branch you want to deploy (usually `main` or `master`).
5. Choose the root folder as the source.
6. Click "Save" to deploy your website.

## Continuous Deployment with GitHub Actions

This project uses GitHub Actions to automate the redeployment of the website when changes are committed to the repository. The workflow configuration can be found in the [`.github/workflows/static.yml`](../../blob/main/.github/workflows/static.yml) file.

The workflow is set up to:

1. Trigger on pushes to the main branch.
2. Deploy the contents of the repository to GitHub Pages.

To modify the deployment process:

1. Navigate to the [`.github/workflows/static.yml`](../../blob/main/.github/workflows/static.yml) file in the repository.
2. Edit the file to adjust the deployment settings as needed.
3. Commit and push your changes.

With this setup, every time you push changes to your main branch, GitHub Actions will automatically redeploy your website, ensuring that your portfolio is always up-to-date with your latest changes.