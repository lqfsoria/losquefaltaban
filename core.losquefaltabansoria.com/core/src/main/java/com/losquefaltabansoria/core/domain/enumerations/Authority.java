package com.losquefaltabansoria.core.domain.enumerations;

import static com.losquefaltabansoria.core.domain.constant.Constants.*;

public enum Authority {
    USER(USER_AUTHORITIES), ADMIN(ADMIN_AUTHORITIES), SUPER_ADMIN(SUPER_ADMIN_AUTHORITIES), MANAGER(
            MANAGER_AUTHORITIES);

    private final String description;

    Authority(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
