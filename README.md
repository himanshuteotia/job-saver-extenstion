# Notion Job Saver Extension

## Overview
This Chrome extension lets you save any job listing to your Notion database with a single click. All job details (Company, Position, Link, Stage, Date) are automatically added to your Notion database.

---

## Notion Setup

### 1. Create a Notion Integration
- Go to [Notion Integrations](https://www.notion.so/my-integrations).
- Create a new integration and copy its **Internal Integration Token**.

### 2. Get Your Database ID
- Open your jobs database in Notion.
- The URL will look like: `https://www.notion.so/yourworkspace/Jobs-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
- The `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` part is your **Database ID**.

### 3. Share Integration with Your Database
- On your database page, click the "Share" button.
- Select your integration and click "Invite" or "Share".

---

## Notion Database Fields (Columns)

You must create these columns in your Notion database (use these exact names and types):

| Name      | Type      | Description                  |
|-----------|-----------|-----------------------------|
| Company   | Title     | Company name (Title column)  |
| Position  | Rich text | Job title/position           |
| Link      | URL       | Job listing link             |
| Stage     | Status    | Application stage/status      |
| Date      | Date      | Date applied                 |

**Notes:**
- The "Company" column must be the Title type (Notion allows only one Title column).
- The "Stage" column should be of type **Status**, with options like "To apply", "Applied", "Interview", "Rejected".

---

## Extension Setup & Usage

1. Install the extension (or load it as an unpacked extension in Chrome).
2. Go to the options page and enter your Notion Integration Token and Database ID.
3. On any job page, click the extension icon.
4. Fill in Company, Position, and Link (Link will auto-fill).
5. Click "Save to Notion". The job will be saved to your Notion database!

---

## Troubleshooting
- **Error: Token/Database ID missing:** Enter the correct values in the options page.
- **Error: Property not found:** Check your database columns' names and types; make sure they match the table above.
- **Error: Integration not shared:** Make sure your integration has access to the database (see Notion setup above).
- **400/401/404 errors:** Usually caused by an incorrect token, database ID, or missing integration access.

---

## Example Database Structure

| Company (Title) | Position (Rich text) | Link (URL) | Stage (Status) | Date (Date) |
|-----------------|---------------------|------------|----------------|-------------|
| Google          | SDE                 | https://...| To apply       | 2024-06-01  |
| Microsoft       | PM                  | https://...| Interview      | 2024-06-02  |

---

## Credits
- Made with ❤️ by Himanshu
- Notion API docs: https://developers.notion.com/

If you have any issues, feel free to raise an issue or contact me! 

<img width="878" alt="image" src="https://github.com/user-attachments/assets/94d1c5fd-3e10-44a2-bb5e-421e1269949a" />


<img width="401" alt="image" src="https://github.com/user-attachments/assets/a4381f60-8dea-4c2e-ba46-5b6e72c9f2b5" />


