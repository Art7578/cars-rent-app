import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 20px;
  }
`;

export const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media screen and (min-width: 480px) and (max-width: 1439px) {
    width: 300px;
  }
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ResetButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;



// import styled from "styled-components";

// export const SearchContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-bottom: 20px;

//   @media screen and (max-width: 479px) {
//     flex-direction: column;
//   }

//   @media screen and (min-width: 480px) and (max-width: 767px) {
//     /* Add styles for 480px to 767px */
//   }

//   @media screen and (min-width: 768px) and (max-width: 1439px) {
//     /* Add styles for 768px to 1439px */
//   }

//   @media screen and (min-width: 1440px) {
//     /* Add styles for 1440px and above */
//   }
// `;

// export const SearchInput = styled.input`
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: calc(50% - 5px); /* Two inputs per row */

//   @media screen and (max-width: 479px) {
//     width: 100%; /* Full width on smaller screens */
//   }

//   @media screen and (min-width: 768px) {
//     width: calc(33.33% - 5px); /* Three inputs per row from 768px */
//   }
// `;

// export const SearchButton = styled.button`
//   padding: 8px 16px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   @media screen and (max-width: 479px) {
//     width: 100%; /* Full width on smaller screens */
//   }
// `;

// export const ResetButton = styled.button`
//   padding: 8px 16px;
//   background-color: #dc3545;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   @media screen and (max-width: 479px) {
//     width: 100%; /* Full width on smaller screens */
//   }
// `;