root->src->app->in app folder all things directly will go to route
- when we are required to use "use client"
1.react hook->use state, use effect...
2.onclick, onsubmit.....


## parellal Routes

## Routes Group

## partial rendaring

### AAA Frameworks --> authentication , authorization, accounting
- authentication ---> try to find out identity of user like who are you..
- authorization  ---> what is the permission for you here.as like are you admin or user
there are two kind of authorization-> RBAC->Role based access control,ABAC->attribute base access control 
- accounting ---> a user activity count

## token base authentication

Token-based Authentication মানে হলো:
লগইন করার পর সার্ভার তোমাকে একটা token দেয়, আর এরপর প্রতিবার request-এ সেই token দেখিয়ে তুমি প্রমাণ করো তুমি কে।

🔹 Token কী?

Token হলো একটা digital key 🗝️
সাধারণত এটা হয় JWT (JSON Web Token)।

এটার ভিতরে থাকে:

user id

role

expire time

signature

যাতে সার্ভার বুঝতে পারে এটা ভুয়া না।

🔹 Token Based Auth Flow
✅ Step 1: Login

User email + password পাঠায় সার্ভারে।


✅ Step 2: Verify

Server database থেকে চেক করে:

user আছে কিনা

password ঠিক কিনা

ঠিক হলে token তৈরি করে।


✅ Step 3: Send Token

Server user-কে token পাঠায়।

✅ Step 4: Store Token

Client token রাখে:

localStorage

cookie

memory


✅ Step 5: Request with Token

এরপর প্রতিবার API call-এ token পাঠাতে হয়।

✅ Step 6: Verify Token

Server token verify করে:

valid কিনা

expire হয়েছে কিনা

signature ঠিক কিনা

ঠিক হলে access দেয় ✅

Login → Token → Store → Request + Token → Verify → Access


🔹 কেন Token Based Auth ভালো?

✅ Stateless
✅ Fast
✅ Scalable
✅ Mobile + SPA friendly
✅ Session দরকার নেই


### token vs session

| Token        | Session     |
| ------------ | ----------- |
| Client এ থাকে  | Server এ থাকে |
| Stateless    | Stateful    |
| SPA friendly | Traditional |



### ✅ JWT Structure Classification

JWT আবার গঠনের দিক থেকে ৩ ভাগে বিভক্ত:

HEADER.PAYLOAD.SIGNATURE

🔹 Header

Algorithm info-->HMAC, SHA256

Token type

🔹 Payload

User data

exp, iat, role

🔹 Signature

Security verify করে

Token পরিবর্তন হয়েছে কিনা চেক করে


## ✅ Session Based Authentication কী?

Session based authentication মানে হলো—
ইউজার লগইন করলে সার্ভার তার জন্য একটি session তৈরি করে, এবং সেই session দিয়েই পরবর্তীতে ইউজারকে চেনা হয়।

JWT এর মতো টোকেন ইউজারের কাছে সব তথ্য থাকে না, বরং এখানে session তথ্য সার্ভারে থাকে।

✅ Step by Step Flow
1️⃣ User Login করে

ইউজার username/password দেয়।

2️⃣ Server Verify করে

সার্ভার ডাটাবেজ থেকে ইউজার চেক করে।

যদি ঠিক হয় 👇
সার্ভার একটি session তৈরি করে।
3️⃣ Session ID Cookie তে পাঠায়

সার্ভার ইউজারের ব্রাউজারে cookie পাঠায়।

4️⃣ Browser Cookie Save করে

ব্রাউজার cookie রেখে দেয়।

5️⃣ User Request পাঠায়

পরবর্তীতে ইউজার যেকোনো request দিলে ব্রাউজার অটো cookie পাঠায়।


6️⃣ Server Session Check করে

সার্ভার cookie থেকে session_id নেয়।
তারপর server storage (memory / redis / db) থেকে user খুঁজে।

✔ থাকলে → request allow
❌ না থাকলে → unauthorized


✅ Logout হলে কী হয়?

ইউজার logout করলে 👇
সার্ভার session delete করে দেয়।


✅ কোথায় Session Store হয়?

Memory

Redis

Database

Production এ বেশি ব্যবহৃত 👉 Redis।
session data->>sid,token,uid, exp time

## jwt vs session


| বিষয়            | Session     | JWT         |
| -------------- | ----------- | ----------- |
| Data থাকে        | Server      | Client      |
| Scalable       | কম          | বেশি          |
| Logout control | Easy        | Hard        |
| Storage        | Server side | Client side |



✅ Cookie & LocalStorage Explained (Bangla)
✅ 1️⃣ Cookie কী?

Cookie হলো ছোট ডাটা যেটা browser + server দুই দিকেই ব্যবহার হয়।

✔ প্রতি request-এর সাথে server এ যায়
✔ Auth, Session, Token রাখতে ব্যবহার হয়
✔ Expire time সেট করা যায়
✔ HttpOnly হলে JS access করতে পারে না

✅ 2️⃣ LocalStorage কী?

LocalStorage হলো browser only storage।

✔ শুধু client side
✔ request-এ যায় না
✔ বড় ডাটা রাখা যায় (~5MB)
✔ JS দিয়ে access করা যায়
✔ Fast

| বিষয়                   | Cookie              | LocalStorage    |
| ---------------------- | ------------------- | --------------- |
| Server access          | ✅                   | ❌               |
| Auto send with request | ✅                   | ❌               |
| Security               | বেশি                | কম              |
| Size                   | ~4KB                | ~5MB            |
| JS Access              | Optional (HttpOnly) | Always          |
| Best use               | Auth, Session       | Theme, UI State |

