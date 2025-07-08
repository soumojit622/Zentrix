import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users Table: Stores information about each user in the system
  users: defineTable({
    name: v.string(), // User's display name
    email: v.string(), // Unique email address of the user
    tokenIdentifier: v.string(), // Unique identifier from Clerk used for authentication
    imageUrl: v.optional(v.string()), // Optional profile image URL
  })
    .index("by_token", ["tokenIdentifier"]) // Lookup by Clerk token
    .index("by_email", ["email"]) // Lookup by email
    .searchIndex("search_name", { searchField: "name" }) // Full-text search on name
    .searchIndex("search_email", { searchField: "email" }), // Full-text search on email

  // Expenses Table: Represents a single expense entry (e.g., dinner bill, cab fare)
  expenses: defineTable({
    description: v.string(), // Description of the expense (e.g., "Dinner at XYZ")
    amount: v.number(), // Total amount of the expense
    category: v.optional(v.string()), // Optional category (e.g., Food, Travel)
    date: v.number(), // Unix timestamp when the expense occurred
    paidByUserId: v.id("users"), // The user who initially paid for the expense
    splitType: v.string(), // Strategy for splitting: "equal", "percentage", or "exact"
    splits: v.array(
      v.object({
        userId: v.id("users"), // Each participant's user ID
        amount: v.number(), // Amount that this user owes
        paid: v.boolean(), // Whether this user has paid their part
      })
    ),
    groupId: v.optional(v.id("groups")), // Optional group this expense belongs to
    createdBy: v.id("users"), // User who created the expense
  })
    .index("by_group", ["groupId"]) // Fetch expenses belonging to a group
    .index("by_user_and_group", ["paidByUserId", "groupId"]) // Query who paid what within a group
    .index("by_date", ["date"]), // Used for filtering/sorting by date

  // Settlements Table: Represents money transfers between users to settle debts
  settlements: defineTable({
    amount: v.number(), // Amount of money settled
    note: v.optional(v.string()), // Optional note about the settlement (e.g., "Paid in cash")
    date: v.number(), // Timestamp when the settlement occurred
    paidByUserId: v.id("users"), // User who paid the amount
    receivedByUserId: v.id("users"), // User who received the settlement
    groupId: v.optional(v.id("groups")), // Group context for the settlement (if any)
    relatedExpenseIds: v.optional(v.array(v.id("expenses"))), // Optional array of expense IDs this covers
    createdBy: v.id("users"), // The user who logged the settlement
  })
    .index("by_group", ["groupId"]) // Group-level settlement query
    .index("by_user_and_group", ["paidByUserId", "groupId"]) // Who paid what in a group
    .index("by_receiver_and_group", ["receivedByUserId", "groupId"]) // Who received what in a group
    .index("by_date", ["date"]), // Sorting/filtering settlements by date

  // Groups Table: Defines a shared group for managing expenses (e.g., flatmates, trip)
  groups: defineTable({
    name: v.string(), // Name of the group (e.g., "Goa Trip")
    description: v.optional(v.string()), // Optional description for the group
    createdBy: v.id("users"), // User who created the group
    members: v.array(
      v.object({
        userId: v.id("users"), // Member’s user ID
        role: v.string(), // Role of the user in the group: "admin" or "member"
        joinedAt: v.number(), // Timestamp of when the user joined the group
      })
    ),
  }),
});
