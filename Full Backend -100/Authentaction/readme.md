validation --- >
validation is such that we can we check the format of the data it is in the good format ot not 

verifaction --- >
verification is such that the given data right or not ?

Authentaction --- >
Authentaction is like that which user is send the request then verify/identify the use and their data ?

Authorization --->
Authorization mean the particular use what can do like a admin can see as a user and also admin but on the other hand user did not see admin dashbord it called a authorization 






Or, add manually in VS Code settings:
1. Use the shortcut ⌘ Shift P to search for MCP:Add Server
2. Select HTTP
3. Paste the server url https://mcp.figma.com/mcp in the search bar, then hit Enter
4. Type in Figma MCP when it asks for a Server ID, then hit Enter
5. Select whether you want to add this server globally or only for the current workspace
6. Open the chat toolbar using ⌥⌘B or ⌃⌘I and switch to Agent mode
7. With the chat open, type in #get_design_context to confirm that the Figma MCP server tools are available
Code snippet
{
  "servers": {
    "Figma": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}



