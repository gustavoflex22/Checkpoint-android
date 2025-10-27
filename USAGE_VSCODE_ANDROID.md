# Como utilizar no Visual Studio Code com Emulador Android

1) **Pré-requisitos**
   - Node.js LTS instalado (`node -v`)
   - Android Studio + SDK Platform e um **AVD** (Android Virtual Device) criado
   - VS Code com terminal integrado
   - Expo CLI (opcional): `npm i -g expo`

2) **Instalação**
   ```bash
   npm install
   ```

3) **Abrir o emulador**
   - Abra o Android Studio > Device Manager > clique em **Play** no seu AVD.

4) **Rodar o app**
   ```bash
   npm run android
   ```
   > Alternativa: `npm start` e, no Metro, pressione **a** para enviar ao emulador.
   > No celular físico, instale **Expo Go** e escaneie o QR code com o app aberto.

5) **Erros comuns**
   - `react-native-reanimated`: verifique `babel.config.js` contém o plugin (já incluído).
   - Emulador não conecta: pare o Metro (`CTRL+C`) e inicie novamente com o emulador já aberto.
   - SDK ausente: instale via Android Studio > SDK Manager, aceite as licenças.