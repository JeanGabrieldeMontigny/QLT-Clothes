import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const Support = () => {
  const [language, setLanguage] = useState("english");
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  // Move the accordionItems array above the findSimilarQuestion function
  const accordionItems = [
    {
      questionEn: "How long does the shipping take?",
      answerEn:
        "Shipping time may vary depending on your location. Generally, domestic orders are delivered within 3-7 business days, while international orders can take 7-14 business days. Please note that these are estimated delivery times and delays may occur due to unforeseen circumstances.",
      questionFr: "Combien de temps prend la livraison ?",
      answerFr:
        "Le délai de livraison peut varier en fonction de votre emplacement. En général, les commandes nationales sont livrées sous 3 à 7 jours ouvrables, tandis que les commandes internationales peuvent prendre 7 à 14 jours ouvrables. Veuillez noter qu'il s'agit de délais de livraison estimés et que des retards peuvent survenir en raison de circonstances imprévues.",
    },
    {
      questionEn: "My size is not available. What can I do?",
      answerEn:
        "If your size is not available, we recommend checking back later as our inventory is regularly updated. Alternatively, you can contact our support team to inquire about restocking or available alternatives. We are here to assist you in finding the perfect fit!",
      questionFr: "Ma taille n'est pas disponible. Que puis-je faire ?",
      answerFr:
        "Si votre taille n'est pas disponible, nous vous recommandons de vérifier ultérieurement car notre inventaire est régulièrement mis à jour. Vous pouvez également contacter notre équipe d'assistance pour vous renseigner sur le réapprovisionnement ou les alternatives disponibles. Nous sommes là pour vous aider à trouver la taille parfaite !",
    },
    {
      questionEn: "Where do you ship?",
      answerEn:
        "We offer shipping to various countries. Please visit our Shipping page for more information.",
      questionFr: "Où livrez-vous ?",
      answerFr:
        "Nous livrons dans différents pays. Veuillez consulter notre page Expédition pour plus d'informations.",
    },
    {
      questionEn: "Where are your products sourced?",
      answerEn:
        "Our products are sourced from various locations and suppliers, ensuring the best quality for our customers.",
      questionFr: "D'où proviennent vos produits ?",
      answerFr:
        "Nos produits proviennent de différents endroits et fournisseurs, garantissant la meilleure qualité pour nos clients.",
    },
    {
      questionEn: "What is the return policy?",
      answerEn:
        "Our return policy allows customers to return products within 30 days of purchase. Please review our Returns page for more details.",
      questionFr: "Quelle est la politique de retour ?",
      answerFr:
        "Notre politique de retour permet aux clients de retourner les produits dans les 30 jours suivant l'achat. Veuillez consulter notre page Retours pour plus de détails.",
    },
    {
      questionEn: "How can I track my order?",
      answerEn:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website.",
      questionFr: "Comment puis-je suivre ma commande ?",
      answerFr:
        "Une fois votre commande expédiée, vous recevrez un numéro de suivi par e-mail. Vous pouvez utiliser ce numéro pour suivre votre commande sur notre site Web.",
    },
  ];

  const findSimilarQuestion = (input) => {
    const similarQuestions = [];
    const similarityThreshold = 0.5; // Adjust this threshold based on your requirements

    // Loop through the FAQ questions to find similar ones
    for (const item of accordionItems) {
      const question =
        language === "english" ? item.questionEn : item.questionFr;
      const similarityScore = calculateSimilarity(input, question);
      if (similarityScore >= similarityThreshold) {
        similarQuestions.push({
          question,
          answer: language === "english" ? item.answerEn : item.answerFr,
        });
      }
    }

    return similarQuestions;
  };

  // Function to calculate similarity score using Levenshtein distance
  const calculateSimilarity = (input, question) => {
    const len1 = input.length;
    const len2 = question.length;

    if (len1 === 0 || len2 === 0) return 0;

    const matrix = Array.from({ length: len1 + 1 }, () =>
      Array(len2 + 1).fill(0)
    );

    for (let i = 0; i <= len1; i++) {
      for (let j = 0; j <= len2; j++) {
        if (i === 0 || j === 0) matrix[i][j] = i + j;
        else if (input[i - 1] === question[j - 1])
          matrix[i][j] = matrix[i - 1][j - 1];
        else
          matrix[i][j] =
            1 +
            Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
      }
    }

    const maxLen = Math.max(len1, len2);
    return 1 - matrix[len1][len2] / maxLen;
  };

  // Function to handle user message submission and provide a response
  const handleUserMessage = (message) => {
    const similarQuestions = findSimilarQuestion(message);
    if (similarQuestions.length > 0) {
      // If similar questions found, display the first match's answer
      const response = similarQuestions[0].answer;
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { user: true, text: message },
      ]);
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { user: false, text: response },
      ]);
    } else {
      // If no similar questions found, display a default response
      const defaultMessage =
        language === "english"
          ? "Our staff will respond to you shortly. Thank you for your patience."
          : "Notre personnel vous répondra sous peu. Merci de votre patience.";
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { user: true, text: message },
      ]);
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { user: false, text: defaultMessage },
      ]);
    }
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "english" ? "french" : "english"
    );
  };

  // Function to handle form submission and user interaction with the chatbox
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      // Handle user message and get a response
      handleUserMessage(userInput);
      // Clear the user's input field after sending
      setUserInput("");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Frequently Asked Questions</h1>
        <button onClick={toggleLanguage}>
          {language === "english" ? "Français" : "English"}
        </button>
      </div>

      <Accordion>
        {accordionItems.map((item, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>
              {language === "english" ? item.questionEn : item.questionFr}
            </Accordion.Header>
            <Accordion.Body>
              {language === "english" ? item.answerEn : item.answerFr}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      {/* Chatbox */}
      <div style={{ marginTop: "20px" }}>
        <h3>
          {language === "english" ? "Chat with us" : "Discutez avec nous"}
        </h3>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            height: "200px",
            overflowY: "scroll",
          }}
        >
          {chatMessages.map((message, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                textAlign: message.user ? "right" : "left",
              }}
            >
              <strong>{message.user ? "You" : "Staff"}</strong>: {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={
              language === "english"
                ? "Type your message here..."
                : "Tapez votre message ici..."
            }
            style={{ width: "100%", padding: "5px" }}
          />
          <button type="submit" style={{ marginTop: "5px" }}>
            {language === "english" ? "Send" : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
