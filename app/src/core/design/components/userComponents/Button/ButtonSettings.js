import { useNode } from "@craftjs/core";
import { TextField, Box } from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  PaddingAccordion,
  MarginAccordion,
  BorderAccordion,
  ColorAccordion,
  AlignmentAccordion,
  ActionAccordion,
  AccordionHeader,
  BackgroundAccordion
} from "../UtilComponents/SettingsUtils";
import { withTranslation } from "react-i18next";
import { CustomAccordion } from "../UtilComponents/Accordion";
import { MARGIN, BORDER } from "../Defaults";
import { ButtonSizeAccordion, ButtonVariantAccordion } from "../UtilComponents/ButtonProperties";

export const ButtonSettings = withTranslation()(({ t }) => {
  const {
    actions: { setProp },
    props
  } = useNode(node => ({
    props: node.data.props
  }));

  return (
    <div>
      <AccordionHeader title={t("basic")} />
      <ActionAccordion props={props} setProp={setProp} />
      <CustomAccordion
        title={t("text")}
        preview={
          <Box px={1} bgcolor="#f1f1f1" borderRadius={5}>
            <Typography variant="caption" color="textSecondary">
              {props.props.text}
            </Typography>
          </Box>
        }
        children={
          <React.Fragment>
            <Box m={1}>
              <Typography variant="subtitle2" color="textSecondary">
                {t("buttonText")}
              </Typography>
              <TextField
                variant="outlined"
                value={props.props.text}
                onChange={e => {
                  e.persist();
                  setProp(prop => {
                    prop.props.text = e.target.value;
                  });
                }}
                fullWidth
                margin="dense"
              />
            </Box>
          </React.Fragment>
        }
      />
      <ButtonSizeAccordion props={props} setProp={setProp} />
      <ButtonVariantAccordion props={props} setProp={setProp} />
      <AccordionHeader title={t("spacing")} />
      <AlignmentAccordion props={props} setProp={setProp} />
      <MarginAccordion props={props} setProp={setProp} />
      <PaddingAccordion props={props} setProp={setProp} />
      <AccordionHeader title={t("decoration")} />
      <BackgroundAccordion
        props={props}
        setProp={setProp}
        isSelfBg={false}
        defaultImage={ButtonDefaultProps.parentStyle.backgroundImage}
      />
      <BorderAccordion props={props} setProp={setProp} />
      <ColorAccordion
        props={props}
        setProp={setProp}
        types={[{ name: t("text"), value: "Text" }, { name: t("button"), value: "Button" }]}
      />
    </div>
  );
});

export const ButtonDefaultProps = {
  props: {
    text: "Click me",
    path: "#",
    linkTarget: "_self"
  },
  style: {
    // width: "auto",
    // height: "auto",
    // fontSize: "1em",
    // backgroundColor: "",
    size: "medium",
    variant: "text",
    color: "#000000",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,‘Segoe UI’,Roboto,Helvetica,Arial,sans-serif,‘Apple Color Emoji’,‘Segoe UI Emoji’,‘Segoe UI Symbol’",

    ...BORDER,
    borderRadius: 4
  },
  parentStyle: {
    align: "center",
    backgroundImage: "",
    backgroundColor: "#00000000",

    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,

    ...MARGIN
  },
  options: {
    paddingOptions: "less",
    borderOptions: "less",
    marginOptions: "less"
  }
};
