document.addEventListener("DOMContentLoaded", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  document.getElementById("jobLink").value = tab.url;

  document.getElementById("saveBtn").addEventListener("click", async () => {
    const company = document.getElementById("companyName").value;
    const title = document.getElementById("jobTitle").value;
    const link = document.getElementById("jobLink").value;

    chrome.storage.sync.get(
      ["notionToken", "databaseId"],
      async function (items) {
        const notionToken = items.notionToken;
        const databaseId = items.databaseId;

        if (!notionToken || !databaseId) {
          alert(
            "Please set your Notion Token and Database ID in the extension options."
          );
          return;
        }

        const pageData = {
          parent: { database_id: databaseId },
          properties: {
            Company: { title: [{ text: { content: company } }] },
            Position: { rich_text: [{ text: { content: title } }] },
            Link: { url: link },
            Stage: { status: { name: "To apply" } },
            Date: { date: { start: new Date().toISOString() } },
          },
        };

        try {
          const response = await fetch("https://api.notion.com/v1/pages", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${notionToken}`,
              "Notion-Version": "2022-06-28",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(pageData),
          });

          if (response.ok) {
            alert("Saved to Notion!");
          } else {
            const err = await response.json();
            alert("Error: " + JSON.stringify(err));
          }
        } catch (error) {
          alert("Error: " + error.message);
        }
      }
    );
  });
});
