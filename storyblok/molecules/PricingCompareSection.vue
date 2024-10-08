<script setup lang="ts">
import type { PricingCompareSectionStoryblok } from '~/component-types-sb'

interface Props {
  blok: PricingCompareSectionStoryblok
}

defineProps<Props>()

type FeatureStatus = 'available' | 'unavailable'

function isFeatureAvailableOrUnavailable(value: string): value is FeatureStatus {
  const normalizedValue = toNormalizedLowerCase(value)

  return normalizedValue === 'available' || normalizedValue === 'unavailable'
}

const iconNames = {
  available: 'material-symbols:check-circle-rounded',
  unavailable: 'material-symbols:cancel-outline',
  default: 'material-symbols:cancel-outline',
}

function iconName(label: 'available' | 'unavailable'): string {
  return iconNames[label] || iconNames.default
}

type PricingPlan = 'basic' | 'advanced' | 'business'

const pricingPlanLinks: Record<PricingPlan, string> = {
  basic: '/pricing/basic',
  advanced: '/pricing/advanced',
  business: '/pricing/business',
}

function isPricingPlan(value: string): value is PricingPlan {
  return ['basic', 'advanced', 'business'].includes(value)
}
</script>

<template>
  <BaseSection
    v-editable="blok"
    class="pricing-compare-section"
  >
    <div class="pricing-compare-section__body">
      <ContentBlock
        v-if="blok.heading"
        :headline="blok.headline"
        :title="blok.heading"
        :title-level="blok.heading_level"
      />
      <div v-if="blok.table" class="pricing-compare-section__table-box">
        <table class="table pricing-compare-section__table">
          <thead v-if="blok.table.thead">
            <tr>
              <th v-for="cell in blok.table.thead" :key="cell._uid">
                {{ cell.value }}
              </th>
            </tr>
          </thead>
          <tbody v-if="blok.table.tbody">
            <tr v-for="row in blok.table.tbody" :key="row._uid">
              <td v-for="cell in row.body" :key="cell._uid">
                <Icon
                  v-if="cell.value && isFeatureAvailableOrUnavailable(cell.value)"
                  :name="iconName(toNormalizedLowerCase(cell.value) as FeatureStatus)"
                  class="table__icon"
                  :class="`table__icon--${toNormalizedLowerCase(cell.value)}`"
                  size="1.5em"
                />
                <template v-else>
                  {{ cell.value }}
                </template>
              </td>
            </tr>
            <tr>
              <td v-for="cell in blok.table.thead" :key="cell._uid">
                <BaseButton
                  v-if="cell.value && isPricingPlan(toNormalizedLowerCase(cell.value))"
                  :to="pricingPlanLinks[toNormalizedLowerCase(cell.value) as PricingPlan]"
                  color="dark-branded"
                >
                  Get Started
                </BaseButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.pricing-compare-section {
  &__table-box {
    margin-top: clamped($min-size: $gap--sm, $max-size: $gap--md);
    border-radius: $rounded--3xl * 2;
    overflow-x: auto;
  }

  &__table {
    width: 100%;
  }
}

.table {
  border-collapse: collapse;

  td {
    padding: clamped($min-size: $spacing--lg, $max-size: $spacing--2xl)
      clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
    text-align: center;
  }

  thead {
    border-bottom: 1px solid $divider-color--regular;

    th {
      padding: clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl)
        clamped($min-size: $spacing--4xl, $max-size: $spacing--8xl);
      @include fluid-typography(
        $min-font-size: $text--3xl,
        $max-font-size: $text--4xl,
        $min-line-height: $leading--none,
        $max-line-height: $leading--tight
      );
      font-weight: $font--extrabold;
      color: $primary-color--dark;
      background-color: $secondary-color--extra-light;
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background-color: $secondary-color--extra-light;
      }

      &:nth-child(odd) {
        background-color: $color-white--soft;
      }
    }
  }

  &__icon {
    &--available {
      color: $icon-color--enabled;
    }
  }

  &__icon {
    &--unavailable {
      color: $icon-color--disabled;
    }
  }
}
</style>
