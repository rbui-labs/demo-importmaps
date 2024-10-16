# Demo Rails Project with importmaps, Tailwind, and RBUI

This README documents the steps taken to set up this Rails project with esbuild for JavaScript handling, Tailwind CSS for styling, and RBUI for UI components.

## Setup Steps

1. Create a new Rails project with esbuild:

   ```
   rails new demo-importmaps --main
   ```

2. Add and install Tailwind CSS:

   ```
   bundle add tailwindcss-rails
   rails tailwindcss:install
   ```

3. Add RBUI to the Gemfile:

   ```ruby
   gem "rbui", github: "rbui-labs/rbui", branch: "main"
   ```

4. Install RBUI:

   ```
   rails generate rbui:install
   ```

5. Add a sample page with RBUI components
   (Details of this step are not provided in the initial setup description)

## Project Structure

This project uses:

- Rails for the web framework
- esbuild for JavaScript bundling
- Tailwind CSS for styling
- RBUI for UI components

## Getting Started

To run this project locally:

1. Ensure you have Ruby and Rails installed
2. Clone this repository
3. Run `bundle install` to install dependencies
4. Run `rails server` to start the development server
5. Visit `http://localhost:3000` in your browser

## Additional Information

For more details on the used technologies, refer to their documentation:

- [Rails](https://guides.rubyonrails.org/)
- [esbuild](https://esbuild.github.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [RBUI](https://github.com/rbui-labs/rbui)

## Contributing

If you'd like to contribute to this project, please...

[Add your contribution guidelines here]

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
