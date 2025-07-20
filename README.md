# 🧠 Mintellect

**The Future of Research. On-Chain.**

Mintellect is an AI + Blockchain-powered research publishing platform where innovation meets credibility. Researchers can mint their papers as NFTs, leverage AI for trust scoring, and undergo human peer-review — all secured immutably on the blockchain.

---

## 🚀 Features

### For Researchers
- **Mint Research NFTs:** Publish research with ownership and provenance on the BNB Testnet.
- **AI-Driven Analysis:** Detect plagiarism, receive improvement suggestions, and get trust scores using advanced AI (Gemini 2.5 Flash).
- **Decentralized Peer Review:** Verified reviewers provide credibility to your work.

### For Readers
- **Free Abstracts:** Access titles and abstracts before unlocking the full paper.
- **AI Twin Recommendations:** Discover relevant research tailored to your needs.
- **Membership Options:** Unlock premium access with future incentives.

---

## 🛠️ Project Stack

- **Frontend:** Next.js (App Router) + TailwindCSS + Ethers.js
- **Backend:** Node.js (Express) + MongoDB + Gemini 2.5 Flash API + PlagiarismSearch API
- **Blockchain:** Solidity (ERC-721 NFT) + Hardhat + BNB Testnet
- **AI & NLP:** Custom ML pipeline (Gemini 2.5 Flash, ongoing improvements)
- **Storage:** IPFS (for NFT metadata), AWS S3 (for workflow archiving)

---

## 🧾 Smart Contract

- **Network:** BNB Testnet
- **NFT Contract Address:** [`0xe99a33535404A4A29B5dAa415BB16E5a5aC131C4`](https://testnet.bscscan.com/address/0xe99a33535404A4A29B5dAa415BB16E5a5aC131C4)

---

## 📦 Local Development

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or cloud)
- MetaMask (for blockchain interaction)
- BNB Testnet funds (for minting NFTs)

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/mintellect.git
cd mintellect-1
```

#### 2. Install dependencies

- **Frontend:**
  ```bash
  cd client
  npm install
  ```
- **Backend:**
  ```bash
  cd ../server
  npm install
  ```
- **Smart Contracts:**
  ```bash
  cd ../client/contracts
  npm install
  ```

#### 3. Environment Variables

- Copy `.env.example` to `.env` in the `server` and `client/contracts` directories and fill in your secrets (MongoDB URI, API keys, private key for deployment, etc.).

#### 4. Run the Backend

```bash
cd server
npm run dev
```

#### 5. Run the Frontend

```bash
cd ../client
npm run dev
```

#### 6. Deploy Smart Contracts (BNB Testnet)

```bash
cd contracts
npx hardhat run --network bnbTestnet scripts/deploy.js
```

---

## 🧑‍💻 Main App Workflow

1. **Upload Document:** Users upload their research paper (PDF, DOCX, TXT, LaTeX).
2. **Eligibility & AI Analysis:** The backend checks eligibility, runs plagiarism detection, and generates a trust score using Gemini 2.5 Flash.
3. **Human Review (Optional):** Community reviewers can provide additional credibility.
4. **NFT Minting:** Eligible papers can be minted as NFTs on the BNB Testnet.
5. **Gallery & Analytics:** Users can view, analyze, and share their NFT certificates. Analytics dashboard visualizes research activity.

---

## 🤝 Peer Review Consensus Protocol

Mintellect uses a decentralized, consensus-driven peer review protocol to ensure fairness, transparency, and credibility in research validation. The process is as follows:

1. **Research Paper Submitted:** The author submits a research paper to the platform.
2. **Assigned to Reviewer Pool:** The paper is assigned to a pool of eligible reviewers.
3. **Reviewer Selection:** Reviewers are selected through a randomized process to avoid bias.
4. **Selected Reviewers:** The chosen reviewers are notified and assigned the paper.
5. **Review Submitted Individually:** Each reviewer evaluates the paper independently and submits their review.
6. **Consensus Evaluation:** The system evaluates the reviews for consensus.
    - If the majority of reviewers agree, the review is accepted.
    - If there is disagreement, a re-evaluation round is triggered.
7. **Re-evaluation Round:** Additional reviewers are assigned to the paper for further assessment.
8. **Consensus Recalculated:** The consensus is recalculated with the new reviews.
9. **Finalization:**
    - If consensus is reached, the paper is minted as a verified NFT and the reputation scores of reviewers are updated.
    - If disagreement persists, the process may repeat until consensus is achieved.

This protocol ensures that only high-quality, community-validated research is minted as a verified NFT, and that reviewer reputation is transparently managed.

<img width="4000" height="4064" alt="image" src="https://github.com/user-attachments/assets/a49fdeb7-3198-4491-a217-77f1149dea1d" />


---

## 📊 Analytics & NFT Gallery

- **NFT Gallery:** Displays all minted NFT certificates for the connected wallet. Each NFT links directly to its BNB Testnet explorer page.
- **Analytics:** Visualizes your research activity, trust scores, and category distribution based on your minted NFTs.

---

## 🧾 API Endpoints (Backend)

- **/api/trust-score/**: Generate and fetch trust scores.
- **/api/files/**: Upload, list, and manage research files.
- **/api/files/:fileId/check-plagiarism**: Run plagiarism checks.
- **/settings/profile/**: Manage user profiles and requirements.

See `server/README.md` for full API documentation.

---

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## 📫 Contact & Community

- Email: [mintellectproject@gmail.com](mailto:mintellectproject@gmail.com)
- Twitter: [@_Mintellect_](https://x.com/_Mintellect_)
- Telegram: [Mintellect Community](https://t.me/mintellect_community)

---

> © 2025 Mintellect. All rights reserved.
