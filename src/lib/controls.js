import { nanoid } from "nanoid";

export const formIdLookup = {
  company: 1,
  role: 2,
  user: 3,
  table: 4,
  "menu-item": 5,
};

export const formControls = {
  1: [
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: true,
      name: "Company Id",
      colName: "COMPANY_ID",
      type: "number",
      visibleInd: 0,
      editableInd: 0,
      formId: 1,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "Company Code",
      colName: "COMPANY_CODE",
      type: "text",
      visibleInd: 0,
      editableInd: 0,
      formId: 1,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "Company Name",
      colName: "COMPANY_NAME",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 1,
      value: "",
      autoFocus: true,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "Mobile No",
      colName: "MOBILE_NO",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 1,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "Email Id",
      colName: "EMAIL_ID",
      type: "email",
      visibleInd: 1,
      editableInd: 1,
      formId: 1,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "Address 1",
      colName: "ADDRESS_1",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 1,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "Address 2",
      colName: "ADDRESS_2",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 1,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "City",
      colName: "CITY",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 1,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "Pincode",
      colName: "PINCODE",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 1,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "State",
      colName: "STATE",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 1,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "Country",
      colName: "COUNTRY",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 1,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Company Master",
      primaryKey: false,
      name: "Record Status",
      colName: "RECORD_STATUS",
      type: "number",
      visibleInd: 0,
      editableInd: 0,
      formId: 1,
      value: "",
      autoFocus: false,
    },
  ],
  2: [
    {
      id: nanoid(),
      formName: "Role Master",
      primaryKey: true,
      name: "Role Id",
      colName: "role_id",
      type: "number",
      visibleInd: 0,
      editableInd: 0,
      formId: 2,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Role Master",
      primaryKey: false,
      name: "Role Name",
      colName: "role_name",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 2,
      value: "",
      autoFocus: true,
    },
    {
      id: nanoid(),
      formName: "Role Master",
      primaryKey: false,
      name: "Role Description",
      colName: "role_desc",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 2,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Role Master",
      primaryKey: false,
      name: "Client Id",
      colName: "client_id",
      type: "text",
      visibleInd: 0,
      editableInd: 0,
      formId: 2,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Role Master",
      primaryKey: true,
      name: "Record Status",
      colName: "rec_status",
      type: "number",
      visibleInd: 0,
      editableInd: 0,
      formId: 2,
      value: "",
      autoFocus: false,
    },
  ],
  3: [
    {
      id: nanoid(),
      formName: "User Master",
      primaryKey: true,
      name: "User Id",
      colName: "user_id",
      type: "number",
      visibleInd: 0,
      editableInd: 0,
      formId: 3,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "User Master",
      primaryKey: false,
      name: "User Name",
      colName: "user_name",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 3,
      value: "",
      autoFocus: true,
    },
    {
      id: nanoid(),
      formName: "User Master",
      primaryKey: false,
      name: "Password",
      colName: "user_password",
      type: "password",
      visibleInd: 1,
      editableInd: 1,
      formId: 3,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "User Master",
      primaryKey: false,
      name: "Mobile No",
      colName: "mobile_no",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 3,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "User Master",
      primaryKey: false,
      name: "Record Status",
      colName: "rec_status",
      type: "number",
      visibleInd: 0,
      editableInd: 0,
      formId: 3,
      value: "",
      autoFocus: false,
    },
  ],
  4: [
    {
      id: nanoid(),
      formName: "Table Master",
      primaryKey: true,
      name: "Table Id",
      colName: "TABLE_ID",
      type: "number",
      visibleInd: 0,
      editableInd: 0,
      formId: 4,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Table Master",
      primaryKey: false,
      name: "Table No",
      colName: "TABLE_No",
      type: "number",
      visibleInd: 1,
      editableInd: 1,
      formId: 4,
      value: "",
      autoFocus: true,
    },
    {
      id: nanoid(),
      formName: "Table Master",
      primaryKey: false,
      name: "Table Name",
      colName: "TABLE_NAME",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 4,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Table Master",
      primaryKey: false,
      name: "Table Code",
      colName: "TABLE_CODE",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 4,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Table Master",
      primaryKey: false,
      name: "Record Status",
      colName: "RECORD_STATUS",
      type: "number",
      visibleInd: 0,
      editableInd: 0,
      formId: 4,
      value: "",
      autoFocus: false,
    },
  ],
  5: [
    {
      id: nanoid(),
      formName: "Menu Item",
      primaryKey: true,
      name: "Item Id",
      colName: "ITEM_ID",
      type: "number",
      visibleInd: 0,
      editableInd: 0,
      formId: 5,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Menu Item",
      primaryKey: false,
      name: "Item Name",
      colName: "ITEM_NAME",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 5,
      value: "",
      autoFocus: true,
    },
    {
      id: nanoid(),
      formName: "Menu Item",
      primaryKey: false,
      name: "Item Description",
      colName: "ITEM_DESCRIPTION",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 5,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Menu Item",
      primaryKey: false,
      name: "Item Code",
      colName: "ITEM_CODE",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 5,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Menu Item",
      primaryKey: false,
      name: "Category",
      colName: "CATEGORY",
      type: "text",
      visibleInd: 1,
      editableInd: 1,
      formId: 5,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Menu Item",
      primaryKey: false,
      name: "A/C Price",
      colName: "AC_PRICE",
      type: "number",
      visibleInd: 1,
      editableInd: 1,
      formId: 5,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Menu Item",
      primaryKey: false,
      name: "Non A/C Price",
      colName: "NON_AC_PRICE",
      type: "number",
      visibleInd: 1,
      editableInd: 1,
      formId: 5,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Menu Item",
      primaryKey: false,
      name: "Parcel",
      colName: "PARCEL_PRICE",
      type: "number",
      visibleInd: 1,
      editableInd: 1,
      formId: 5,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Menu Item",
      primaryKey: false,
      name: "Discount Applicable",
      colName: "DISCOUNT_APPLICABLE",
      type: "check",
      visibleInd: 1,
      editableInd: 1,
      formId: 5,
      value: "",
      autoFocus: false,
    },
    {
      id: nanoid(),
      formName: "Menu Item",
      primaryKey: false,
      name: "Record Status",
      colName: "RECORD_STATUS",
      type: "number",
      visibleInd: 0,
      editableInd: 0,
      formId: 5,
      value: "",
      autoFocus: false,
    },
  ],
};
