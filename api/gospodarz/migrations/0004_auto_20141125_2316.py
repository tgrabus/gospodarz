# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gospodarz', '0003_auto_20141125_2310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='farmer',
            name='positionX',
            field=models.FloatField(blank=True, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='farmer',
            name='positionY',
            field=models.FloatField(blank=True, null=True),
            preserve_default=True,
        ),
    ]
