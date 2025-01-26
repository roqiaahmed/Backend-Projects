# TMDB CLI Tool

TMDB is API to fetch movie information and display it in the terminal.

# Setup Instructions

1. **Clone the Repository**:

```bash
     git clone https://github.com/roqiaahmed/Backend-Projects.git
```

2. **Install Dependencies**:

```bash
   cd Expense-Tracker-CLI
   npm install
```

3. **Set Environment Variables**:

- Create a .env file in the root directory and add the following variables:
  ```bash
    TMDB_TOKN=your_TMDB_uri_TOKN
  ```

4. **Link the project**:

```bash
   npm link
```

5. **run the commend**

```bash
    tmdb-app --type "playing"
    tmdb-app --type "popular"
    tmdb-app --type "top"
    tmdb-app --type "upcoming"
```
