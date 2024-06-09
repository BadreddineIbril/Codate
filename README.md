<div>
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="src/assets/images/rounded-logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1>Codate</h1>

  <p>
    Welcome to Codate 👋! Codate is a developer-friendly tool that simplifies date formatting across multiple programming languages. Whether you're working with JavaScript, Python, Java, C#, Ruby, PHP, Swift, Kotlin, Go, or Rust, 
    Codate helps you generate the perfect date format code snippet effortlessly.
    <br />
    <br />
    <a href="https://codate.io" target="_blank"><strong>Try it Now »</strong></a>
  </p>
</div>

<br />

<img src="src/assets/images/preview.png" alt="Logo" width="100%">


## Features

- <b>Multi-language Support:</b> Generate date format code snippets for `JavaScript`, `Python`, `Java`, `C#`, `Ruby`, `PHP`, `Swift`, `Kotlin`, `Go`, and `Rust`.
- <b>Various Date Formats:</b> Choose from a wide range of date formats including `YYYY-MM-DD`, `MM/DD/YYYY`, `DD/MM/YYYY`, and more.
- <b>Easy to Use:</b> Select your preferred programming language and date format, then copy the generated `code snippet`.
- <b>Developer-Friendly:</b> Save `time` and avoid `errors` with our intuitive interface designed specifically for developers.

<br />

## How to Use

1. <b>Select Language:</b> Choose your preferred programming `language`.
2. <b>Select Date Format:</b> Pick a `date format` that suits your project's needs.
3. <b>Copy Code Snippet:</b> Copy the generated `code` snippet and paste it into your project.

<br />

## Example
1. <b>Select Language:</b> `JavaScript`
2. <b>Select Date Format:</b> `YYYY-MM-DD`
3. <b>Copy Code Snippet:</b>

```javascript

function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

console.log(formatDate(new Date())); 

// Outputs: 2024-05-01

```

<br />

## Beta Notice
⚠️ Notice: **Codate** is currently in beta. Mobile responsiveness is under development. For now, please use the platform on a desktop or tablet.

<br />

## Get Involved
Got feedback or ideas? We'd love to hear from you! Open an issue or pull request on GitHub.

<br />

## Contribute
👾 COD-1337: Hey there, fellow coder! Ready to dive into the world of Codate contributions? Let's embark on this adventure together!

<div class="contribute" align="center">
  <img src="https://lh3.googleusercontent.com/proxy/qM0-3XcZ2bs2RqRDH50y4ISvpxgEQdMojmGKZxWCiJfnnnNJd8pPc1mcaNaLeGPXk5fQ8bZ1SeOX9J3u0t7Kb1ElBSnN-rzq6ryMTHYyXDkKWZYxWnGrI6piJbHzhS_TUNFHy3J-mLZGErvy94SEQZErlOhHukvHdjw" alt="Logo" width="100%">
</div>

#### Step 1: Fork and Clone the Repository
1. **Fork the Repo**:
   - Hit that `Fork` button up top to snag your own copy of the repo.

2. **Clone Your Fork**:
   - Fire up your terminal and type:
     
     ```bash
     git clone https://github.com/BadreddineIbril/Codate.git
     cd Codate
     ```

#### Step 2: Create a New Branch
Stay organized with a fresh branch:

```bash
git checkout -b COD-<index>
```

#### Step 3: Add the New Language
1. **Navigate to the Language Data File**:
   - Open `core/data/languages/index.ts`.

2. **Add the New Language**:
   - Pop a new entry into the `LANGUAGES` array.
   - Don't forget to get the language icons from [Devicon](https://devicon.dev/) for a more visually appealing display.
  
     ```typescript
     {
       id: "lang_id",
       name: "Language Name",
       icon: "URL_to_language_icon",
     }
     ```

#### Step 4: Add Date Format Functions for the New Language
1. **Navigate to the Date Formats File**:
   
   - Open `core/data/date-formats/index.ts`.

2. **Add Function Implementations**:
   - For each date format, find its file under `core/data/date-formats/formats/`.
   - Now, add the function for the new language. For instance, for `DD/MM/YYYY HH:mm`:
     
     ```typescript
     export const DDMMYYYY_HHmm: FunctionDefinition[] = [
       {
        language_id: "your_new_language_id",
        function: ` // Your awesome function goes here! `;
       },
       ...
     ];
     ```

#### Step 5: Commit Your Changes
1. **Stage and Commit**:
   
   ```bash
   git add .
   git commit -m "Added magic ✨"
   ```

3. **Push Your Branch**:
   
   ```bash
   git push origin COD<index>
   ```

#### Step 6: Create a Pull Request
1. **Open a PR**:
   - Head over to the original Codate repo.
   - Click "Compare & pull request" and give us a heads-up on your changes.

<br />

## License
MIT License. See the [LICENSE](https://github.com/BadreddineIbril/Codate/blob/main/LICENSE) file for more details.
