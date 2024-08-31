import React from "react";

const LeftSidebar = () => {
  const gettingStartedItems = [
    "Introduction",
    "Installation",
    "components.json",
    "Theming",
    "Dark mode",
    { name: "CLI", updated: true },
    "Typography",
    "Figma",
    "Changelog",
  ];

  const componentItems = [
    "Accordion",
    "Alert",
    "Alert Dialog",
    "Aspect Ratio",
    "Avatar",
    "Badge",
    "Breadcrumb",
    "Button",
    "Calendar",
    "Card",
    "Carousel",
    "Chart",
    "Checkbox",
    "Collapsible",
    "Combobox",
    "Command",
    "Context Menu",
    "Data Table",
    "Date Picker",
    "Dialog",
    "Drawer",
    "Dropdown Menu",
    "Form",
    "Hover Card",
    "Input",
    "Input OTP",
    "Label",
    "Menubar",
    "Navigation Menu",
    "Pagination",
    "Popover",
    "Progress",
    "Radio Group",
    "Resizable",
    "Scroll Area",
    "Select",
    "Separator",
    "Sheet",
    "Skeleton",
    "Slider",
    "Sonner",
    "Switch",
    "Table",
    "Tabs",
    "Textarea",
    "Toast",
    "Toggle",
    "Toggle Group",
    "Tooltip",
  ];

  return (
    <div className="pt-10 px-6 w-full text-sm pl-16 h-[89vh] md:w-[340px] overflow-y-auto">
      <h2 className="font-semibold mb-4">Getting Started</h2>
      <ul className="space-y-2">
        {gettingStartedItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {typeof item === "string" ? (
              item
            ) : (
              <>
                {item.name}
                {item.updated && (
                  <span className="ml-2 px-2 py-0.5 bg-green-200 text-green-700 text-xs rounded">
                    Updated
                  </span>
                )}
              </>
            )}
          </li>
        ))}
      </ul>

      <h2 className="font-semibold mt-8 mb-4">Components</h2>
      <ul className="space-y-2">
        {componentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
