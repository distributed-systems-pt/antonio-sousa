import React from "react";

import Icons from "./Icons";
import links from "./Content";

import * as S from "./styled";

const Social = (props) => (
  <S.SocialList className={props.className}>
    {links.map((link, i) => {
      const Icon = Icons[link.label];
      const title = `${link.title}_icon`; // needed for adBlock

      return (
        <S.SocialItemList key={i}>
          <S.SocialLink
            href={link.url}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
          </S.SocialLink>
        </S.SocialItemList>
      );
    })}
  </S.SocialList>
);

export default Social;
