import { useState } from "react";
import {
  GiftSection,
  GiftContainer,
  GiftTitle,
  GiftSubtitle,
  GiftIcon,
  AccountsGrid,
  AccountCard,
  BankLogo,
  BankName,
  AccountInfo,
  AccountLabel,
  AccountNumber,
  AccountName,
  CopyButton,
  Divider,
  NoteText,
} from "./Gift.style";

function Gift() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const accounts = [
    {
      bank: "BCA",
      accountNumber: "1291349965",
      accountName: "Arian Priyana",
    },
  ];

  const handleCopy = (accountNumber, index) => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopiedIndex(index);
      
      // Reset after 2 seconds
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    });
  };

  return (
    <GiftSection id="gift">
      <GiftContainer>
        <GiftIcon>🎁</GiftIcon>
        
        <GiftTitle>Wedding Gift</GiftTitle>
        <GiftSubtitle>
          Kehadiran dan doa restu Anda adalah hadiah terindah bagi kami.
          <br />
          Namun jika Anda ingin memberikan hadiah, kami menyediakan amplop digital.
        </GiftSubtitle>

        <AccountsGrid>
          {accounts.map((account, index) => (
            <AccountCard key={index} $delay={`${index * 0.2}s`}>
              <BankLogo>
                <BankName>{account.bank}</BankName>
              </BankLogo>

              <AccountInfo>
                <AccountLabel>Nomor Rekening</AccountLabel>
                <AccountNumber>{account.accountNumber}</AccountNumber>
                
                <AccountLabel>Atas Nama</AccountLabel>
                <AccountName>{account.accountName}</AccountName>
              </AccountInfo>

              <CopyButton
                onClick={() => handleCopy(account.accountNumber, index)}
                className={copiedIndex === index ? "copied" : ""}
              >
                {copiedIndex === index ? "✓ Tersalin" : "Salin Nomor Rekening"}
              </CopyButton>
            </AccountCard>
          ))}
        </AccountsGrid>

        <Divider />

        <NoteText>
          Terima kasih atas perhatian dan kebaikan hati Anda.
          <br />
          Semoga kebahagiaan selalu menyertai kita semua.
        </NoteText>
      </GiftContainer>
    </GiftSection>
  );
}

export default Gift;