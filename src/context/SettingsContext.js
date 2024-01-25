import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

export const THEMES = {
  LIGHT: 'LIGHT',
  ONE_DARK: 'ONE_DARK',
  UNICORN: 'UNICORN'
};


const SettingsContext = createContext();

const defaultSettings = {
  direction: "ltr",
  responsiveFontSizes: true,
  theme: THEMES.LIGHT,
  editor: {
    placeholders: [],
  }
};

export function SettingsProvider({ settings, children }) {
  const [currentSettings, setCurrentSettings] = useState({
    ...defaultSettings,
    theme: settings.theme ?? defaultSettings.theme,
    editor: settings.editor ?? defaultSettings.editor,
  });

  const handleSaveSettings = (updatedSettings = {}) => {
    const mergedSettings = _.merge({}, currentSettings, updatedSettings);

    setCurrentSettings(mergedSettings);
  };

  useEffect(() => {
    document.dir = currentSettings.direction;
  }, [currentSettings]);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  settings: PropTypes.object
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
