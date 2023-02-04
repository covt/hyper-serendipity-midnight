/*
 * Project: Serendipity Hyper
 */

const serendipityMidnight = {
    coral: "#EE8679",
    salmon: "#F8D2C9",
    fennel: "#5BA2D0",
    mint: "#9CCFD8",
    violet: "#A78BFA",
    sky: "#94B8FF",
    base: "#151726",
    interface: "#1C1E2D",
    overlay: "#232534",
    soft: "#6B6D7C",
    slight: "#8D8F9E",
    text: "#DEE0EF",
    focusLow: "#1F212F",
    focusMedium: "#3E404F",
    focusHigh: "#535568"
  };
  
  const backgroundColor = serendipityMidnight.base
  const foregroundColor = serendipityMidnight.text
  const cursorColor = serendipityMidnight.soft
  const borderColor = serendipityMidnight.interface
  
  const colors = {
    black: serendipityMidnight.overlay,
    red: serendipityMidnight.coral,
    green: serendipityMidnight.fennel,
    yellow: serendipityMidnight.violet,
    blue: serendipityMidnight.sky,
    magenta: serendipityMidnight.mint,
    cyan: serendipityMidnight.salmon,
    white: serendipityMidnight.text,
    lightBlack: serendipityMidnight.overlay,
    lightRed: serendipityMidnight.coral,
    lightGreen: serendipityMidnight.fennel,
    lightYellow: serendipityMidnight.violet,
    lightBlue: serendipityMidnight.sky,
    lightMagenta: serendipityMidnight.mint,
    lightCyan: serendipityMidnight.salmon,
    lightWhite: serendipityMidnight.text,
  };
  
  exports.decorateConfig = config => {
  
    return Object.assign({}, config, {
      foregroundColor,
      backgroundColor,
      borderColor,
      cursorColor: config.cursorColor || cursorColor,
      colors,
      cursorShape: config.cursorShape || "BEAM",
      fontSize: config.fontSize || 14,
      fontFamily: config.fontFamily || "'iMWritingMonoS Nerd Font', Hack",
      css: `
        ${config.css || ""}
        .header_header {
          background-color: ${backgroundColor} !important;
          top: 0 !important;
          right: 0 !important;
          left: 0 !important;
        }
        .terminal .xterm-selection div {
          background: ${backgroundColor} !important;
        }
        .tab_first {
          margin-left: 0 !important;
          padding: 0 !important;
        }
        .tabs_list,
        .tab_tab {
          border: 0 !important;
        }
        .tab_tab {
          color: ${foregroundColor};
          transition: color 50ms ease, background 50ms ease;
        }
        .tab_tab.tab_active,
        .tab_tab:hover {
          color: ${serendipityMidnight.salmon};
          background-color: ${backgroundColor};
        }
        .splitpane_divider {
          background-color: ${backgroundColor} !important;
        }
        /*+---------------+
         + hyper-statusline Plugin Support +
         +----------------+*/
        .footer_footer {
          background-color: ${serendipityMidnight.interface};
        }
        .footer_footer .item_item {
          color: ${serendipityMidnight.interface};
        }
        .footer_footer .item_icon.icon_dirty {
          background-color: ${serendipityMidnight.interface};
        }
        .footer_footer .item_icon.icon_pull,
        .footer_footer .item_icon.icon_push {
          background-color: ${serendipityMidnight.interface};
        }
      `
    });
  };